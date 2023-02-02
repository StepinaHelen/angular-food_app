import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import {
  AuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { User, UserRole } from '../shared/types/types';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from './types';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthsService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private localStorageService: LocalStorageService
  ) {}

  handleSuccessLogin(result: firebase.auth.UserCredential) {
    this.setToken(result.user?.uid);
    this.getCurrentUser(result.user?.uid ?? null);

    this.ngZone.run(() => {
      this.router.navigate(['/']);
    });
  }

  async signIn(email: string, password: string) {
    try {
      const signInResult = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      this.handleSuccessLogin(signInResult);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }

  async signUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
      this.setUserData(result.user);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }

  get isLoggedIn(): boolean {
    const token = this.localStorageService.getLocalStorageItem(
      LocalStorageKeys.token
    );
    return token !== null ? true : false;
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  facebookAuth() {
    return this.authLogin(new FacebookAuthProvider());
  }

  githubAuth() {
    return this.authLogin(new GithubAuthProvider());
  }

  async authLogin(provider: AuthProvider) {
    try {
      const authLoginResult = await this.afAuth.signInWithPopup(provider);

      this.handleSuccessLogin(authLoginResult);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }

  getCurrentUser(token: string | null) {
    if (!token) {
      return;
    }

    this.afs
      .doc<User>(`users/${token}`)
      .valueChanges()
      .pipe(
        take(1),
        tap((data) => {
          this.userSubject.next(data ?? null);
        })
      )
      .subscribe();
  }

  setUserData(user: firebase.User | null) {
    if (!user) {
      return;
    }

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email ?? '',
      displayName: user.displayName ?? '',
      photoURL: user.photoURL ?? '',
      role: UserRole.client,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
      this.setToken(null);
      this.userSubject.next(null);
      this.router.navigate(['login']);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }

  private setToken(token: string | null | undefined) {
    if (token) {
      this.localStorageService.setLocalstorageItem(
        LocalStorageKeys.token,
        token
      );
    } else {
      localStorage.clear();
    }
  }

  get token() {
    return this.localStorageService.getLocalStorageItem<string>(
      LocalStorageKeys.token
    );
  }
}
