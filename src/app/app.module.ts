// Angular Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

// Routes
import { ROUTES } from './config/routing.config';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import 'hammerjs';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseConfig } from './config/firebase.config';

// Services
import { TopicService } from './topic/topic.service';
import { EntryService } from './entry/entry.service';
import { AuthService } from './login/auth.service';

// Custom Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { AddStageComponent } from './topic/add-stage/add-stage.component';
import { AddTopicComponent } from './topic/add-topic/add-topic.component';
import { EntryComponent } from './entry/entry.component';
import { AddEntryComponent } from './entry/add-entry/add-entry.component';
import { SideEntryComponent } from './entry/side-entry/side-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    TopicComponent,
    AddStageComponent,
    AddTopicComponent,
    EntryComponent,
    AddEntryComponent,
    SideEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdGridListModule,
  ],
  providers: [
    TopicService,
    EntryService,
    AuthService,
    AngularFireAuth,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent, MenuComponent],
  exports: [MaterialModule]
})
export class AppModule { }
