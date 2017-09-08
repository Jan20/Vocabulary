import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

import { AddTopicComponent } from './add-topic.component';
import { TopicService } from '../topic.service';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseConfig } from './../../config/firebase.config';

describe('AddEntryComponent', () => {
  let component: AddTopicComponent;
  let fixture: ComponentFixture<AddTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        MdGridListModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule
      ],
      declarations: [ AddTopicComponent ],
      providers: [TopicService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
