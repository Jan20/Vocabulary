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
  private flag: boolean;
  private email: string;
  private password: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    public authService: AuthService

  ) {

    this.flag = true;
    this.email = '';
    this.password = '';

  }

  ///////////////
  // Functions //
  ///////////////
  public signUp(): void {

    this.authService.signUp(this.email, this.password);

  }

  public logIn(): void {

    this.authService.logIn(this.email, this.password);

  }

  public logOut(): void {

    this.authService.logOut();

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

}
