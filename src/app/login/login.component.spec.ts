// Angular Modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

// Routes
import { ROUTES } from './../config/routing.config';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseConfig } from './../config/firebase.config';

// Services
import { AuthService } from './../login/auth.service';

// Custom Components
import { LoginComponent } from './../login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
       ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          ROUTES,
          { enableTracing: true }
        ),
        FormsModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule,
        MaterialModule,
        MdGridListModule
      ],
      providers: [
        AuthService,
        AngularFireAuth,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
