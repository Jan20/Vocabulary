import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaterialModule } from './../material.module';

// Services
import { AuthService } from './auth.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ///////////////
  // Variables //
  ///////////////
  private loggedIn: boolean;
  private email: string;
  private password: string;
  
  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    public authService: AuthService
    
  ) {
 
    this.loggedIn = false;

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

  /////////////
  // Setters //
  /////////////
  public setEmail(email: string): void {

    this.email = email;

  }

  public setPassword(password: string): void {

    this.password = password;

  }

  public setLoggedIn(loggedIn: boolean): void {

    this.loggedIn = loggedIn;

  }

}
