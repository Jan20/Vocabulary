import { inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EntryService } from './entry.service';


describe('EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      declarations: [
      
      ],
      imports: [
      

      
      ],
      providers: [
      
        EntryService
      
      ]
    });
  });

  it('should be created', inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
