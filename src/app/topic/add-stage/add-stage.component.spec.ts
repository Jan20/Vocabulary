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

// Custom Components
import { AddStageComponent } from './add-stage.component';

describe('AddEntryComponent', () => {
  let component: AddStageComponent;
  let fixture: ComponentFixture<AddStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddStageComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        MdGridListModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(FirebaseConfig),
      ],
      providers: [
        TopicService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
