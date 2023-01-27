import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthsService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  // Sign in with Facebook
  facebookAuth() {
    return this.authLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  authLogin(provider: any) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
