import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ///////////////
  // Variables //
  ///////////////
  private email: string;
  private password: string;
  private loggedIn: boolean;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    public authService: AuthService

  ) {

    this.email = '';
    this.password = '';
    this.loggedIn = true;
  }

  ///////////////
  // Functions //
  ///////////////
  public signUp(): void {

    this.authService.signUp(this.email, this.password);
    if (this.authService.getUser()) {

      this.loggedIn = true;

    }
  }

  public logIn(): void {

    this.authService.logIn(this.email, this.password);
    if (this.authService.getUser()) {

      this.loggedIn = true;

    }

  }

  public logOut(): void {

    this.authService.logOut();
    this.loggedIn = false;

  }

  /////////////
  // Getters //
  /////////////
  public getEmail(): string {

    return this.email;

  }

  public getPassword(): string {

    return this.password;

  }

  public getLoggedIn(): boolean {

    return this.loggedIn;

  }

}
