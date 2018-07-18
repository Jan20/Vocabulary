import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './config/material.module';
import { EntryModule } from './entry/entry.module';
import { LandingModule } from './landing/landing.module';
import { LanguageModule } from './language/language.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { StageModule } from './stage/stage.module';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';

@NgModule({
  
  declarations: [
    
    AppComponent,

  ], 
  imports: [
    
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    MenuModule,
    LanguageModule,
    StageModule,
    TopicModule,
    EntryModule,
    SharedModule,
    LandingModule,

  ], 
  providers: [
    
    {provide: APP_BASE_HREF, useValue : '/' }
  
  ], 
  bootstrap: [
  
    AppComponent
  
  ]
})
export class AppModule { }
