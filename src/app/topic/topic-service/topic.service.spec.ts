import { TestBed, inject } from '@angular/core/testing';

import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseConfig } from './../config/firebase.config';

// Services
import { TopicService } from './topic.service';


describe('TopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule],
      providers: [TopicService]
    });
  });

  it('should be created', inject([TopicService], (service: TopicService) => {
    expect(service).toBeTruthy();
  }));

});
