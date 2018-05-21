// Angular Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseConfig } from './../../config/firebase.config';

// Services
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

// Custom Components
import { SideEntryComponent } from './side-entry.component';

describe('EntryComponent', () => {
  let component: SideEntryComponent;
  let fixture: ComponentFixture<SideEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideEntryComponent
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        MdGridListModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule
      ],
      providers: [
        TopicService,
        EntryService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
