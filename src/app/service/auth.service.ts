import { Injectable, NgZone } from '@angular/core';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  OAuthCredential,
} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from '../shared/types/types';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthsService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private localStorageService: LocalStorageService
  ) {}

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem(LocalStorageKeys.token)!);
    return token !== null ? true : false;
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['/order-history']);
      }
    });
  }

  facebookAuth() {
    return this.authLogin(new FacebookAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigateByUrl('/');
      }
    });
  }

  githubAuth() {
    return this.authLogin(new GithubAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['/order-history']);
      }
    });
  }

  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential as OAuthCredential;
        const token = credential.accessToken;
        this.setUserData(result.user);
        this.setToken(token);
        this.ngZone.run(() => {
          this.router.navigateByUrl('/');
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      this.setToken(null);
      this.router.navigate(['login']);
    });
  }

  private setToken(resp: any) {
    if (resp) {
      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.token,
        resp
      );
    } else {
      localStorage.clear();
    }
  }

  get token() {
    return localStorage.getItem('token');
  }
}
