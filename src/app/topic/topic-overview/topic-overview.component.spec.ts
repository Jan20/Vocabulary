// // Angular Components
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { APP_BASE_HREF } from '@angular/common';

// // Routes
// import { ROUTES } from './../config/routing.config';
// import { RouterModule, Routes } from '@angular/router';

// // Angular Material
// import { MaterialModule } from '@angular/material';
// import { MdGridListModule } from '@angular/material';

// // Firebase
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { FirebaseConfig } from './../config/firebase.config';

// // Services
// import { TopicService } from './topic.service';

// // Custom Components
// import { LoginComponent } from './../login/login.component';
// import { TopicComponent } from './topic.component';
// import { AddStageComponent } from './add-stage/add-stage.component';
// import { AddTopicComponent } from './add-topic/add-topic.component';
// import { EntryComponent } from './../entry/entry.component';
// import { AddEntryComponent } from './../entry/add-entry/add-entry.component';
// import { SideEntryComponent } from './../entry/side-entry/side-entry.component';

// describe('TopicComponent', () => {
//   let component: TopicComponent;
//   let fixture: ComponentFixture<TopicComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         LoginComponent,
//         TopicComponent,
//         AddStageComponent,
//         AddTopicComponent,
//         EntryComponent,
//         AddEntryComponent,
//         SideEntryComponent
//       ],
//       imports: [
//         FormsModule,
//         BrowserAnimationsModule,
//         RouterModule.forRoot(
//           ROUTES,
//           { enableTracing: true }
//         ),
//         MaterialModule,
//         MdGridListModule,
//         AngularFireModule,
//         AngularFireDatabaseModule,
//         AngularFireModule.initializeApp(FirebaseConfig),
//         AngularFireDatabaseModule,
//       ],
//       providers: [
//         TopicService,
//         {provide: APP_BASE_HREF, useValue : '/' }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TopicComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
