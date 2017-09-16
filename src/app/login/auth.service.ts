import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Router
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: any;

  constructor(

    public angularFireAuth: AngularFireAuth,
    public router: Router

  ) { }

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

      this.router.navigate(['/portfolio']);


    }).catch( (error) => {

      alert(error.message);

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
