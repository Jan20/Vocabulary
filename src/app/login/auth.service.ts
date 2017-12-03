import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

// Router
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: any;
  private authState: any;

  constructor(

    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router

  ) { 

    if (this.angularFireAuth.auth.currentUser) {
   
      this.user = this.angularFireAuth.auth.currentUser
   
    }

  }

  ///////////////
  // Functions //
  ///////////////

  public signUp(email: string, password: string): void {

    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).catch((error) => {

    });

    this.angularFireAuth.auth.onAuthStateChanged((user) => {

      if (user) {

        this.user = user.displayName;
        this.router.navigate(['/entry']);

      }

    });

  }

  public logIn(email: string, password: string): void {

    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then( (result) => {

      this.router.navigate(['/language']);


    }).catch( (error) => {

      console.log(error.message);

    });

  }

  public logOut(): void {

    this.angularFireAuth.auth.signOut();

    this.angularFireAuth.auth.onAuthStateChanged((user) => {

      if (user) {

        this.router.navigate(['/']);

      }
    });

  }

  /////////////
  // Getters //
  /////////////
  public getUser(): string {

    return this.user;

  }

  /////////////
  // Getters //
  /////////////
  public setUser(user: any): void {

    this.user = user;

  }

}
