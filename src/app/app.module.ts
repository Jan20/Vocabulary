// Angular Components
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EngishConfig } from './config/firebase.config';
import { SpanishConfig } from './config/firebase.config';

// Services
import { LanguageService } from './language/language.service';
import { StageService } from './stage/stage.service';
import { TopicService } from './topic/topic.service';
import { EntryService } from './entry/entry.service';
import { AuthService } from './login/auth.service';

// Custom Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LanguageComponent } from './language/language.component';
import { AddLanguageComponent } from './language/add-language/add-language.component';
import { UpdateLanguageComponent } from './language/update-language/update-language.component';
import { StageComponent } from './stage/stage.component';
import { AddStageComponent } from './stage/add-stage/add-stage.component';
import { TopicComponent } from './topic/topic.component';
import { AddTopicComponent } from './topic/add-topic/add-topic.component';
import { EntryComponent } from './entry/entry.component';
import { AddEntryComponent } from './entry/add-entry/add-entry.component';
import { UpdateEntryComponent } from './entry/update-entry/update-entry.component';
import { SideEntryComponent } from './entry/side-entry/side-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LanguageComponent,
    AddLanguageComponent,
    UpdateLanguageComponent,
    StageComponent,
    AddStageComponent,
    TopicComponent,
    AddTopicComponent,
    EntryComponent,
    AddEntryComponent,
    SideEntryComponent,
    UpdateEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp(EngishConfig),
    AngularFireDatabaseModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdGridListModule,
  ],
  providers: [
    LanguageService,
    StageService,
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
