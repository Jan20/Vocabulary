import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
