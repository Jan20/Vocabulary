import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseConfig } from './../../config/firebase.config';

// Services
import { TopicService } from './../../topic/topic.service';
import { EntryService } from './../entry.service';

// Custom Components
import { AddEntryComponent } from './add-entry.component';


describe('AddEntryComponent', () => {
  let component: AddEntryComponent;
  let fixture: ComponentFixture<AddEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddEntryComponent
      ],
      imports: [
        MaterialModule,
        MdGridListModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule
      ],
      providers: [
        TopicService,
        EntryService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
