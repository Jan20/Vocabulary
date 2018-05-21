// Angular Components
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
import { FirebaseConfig } from './../config/firebase.config';

// Services
import { TopicService } from './../topic/topic.service';
import { EntryService } from './../entry/entry.service';

// Custom Components
import { LoginComponent } from './../login/login.component';
import { TopicComponent } from './../topic/topic.component';
import { AddStageComponent } from './../topic/add-stage/add-stage.component';
import { AddTopicComponent } from './../topic/add-topic/add-topic.component';
import { EntryComponent } from './../entry/entry.component';
import { AddEntryComponent } from './../entry/add-entry/add-entry.component';
import { SideEntryComponent } from './../entry/side-entry/side-entry.component';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        TopicComponent,
        AddStageComponent,
        AddTopicComponent,
        EntryComponent,
        AddEntryComponent,
        SideEntryComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdGridListModule,
        RouterModule.forRoot(
          ROUTES,
          { enableTracing: true }
        ),
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule,
      ],
      providers: [
        TopicService,
        EntryService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
