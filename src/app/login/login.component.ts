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
  private flag: boolean;
  private email: string;
  private password: string;
  
  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private authService: AuthService
    
  ) {
 
    this.flag = false;

  }

  ///////////////
  // Functions //
  ///////////////
  public signUp(): void {
    console.log(this.email);
    console.log(this.password);
    this.authService.signUp(this.email, this.password);
    if (this.authService.getUser()) {

      this.flag = true;

    }
  }

  public logIn(): void {

    this.authService.logIn(this.email, this.password);
    if (this.authService.getUser()) {

      this.flag = true;

    }

  }

  public logOut(): void {

    this.authService.logOut();
    this.setFlag(false);

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

  public getFlag(): boolean {

    return this.flag;

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

  public setFlag(flag: boolean): void {

    this.flag = flag;

  }

}
