import { TestBed, inject } from '@angular/core/testing';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseConfig } from './../config/firebase.config';

// Services
import { EntryService } from './entry.service';

describe('EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule],
      providers: [
        EntryService
      ]
    });
  });

  it('should be created', inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
