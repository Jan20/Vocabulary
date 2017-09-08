// Angular Components
import { async, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from '@angular/material';

// Routing
import { ROUTES } from './config/routing.config';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { AddStageComponent } from './topic/add-stage/add-stage.component';
import { AddTopicComponent } from './topic/add-topic/add-topic.component';
import { EntryComponent } from './entry/entry.component';
import { AddEntryComponent } from './entry/add-entry/add-entry.component';
import { SideEntryComponent } from './entry/side-entry/side-entry.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        TopicComponent,
        AddStageComponent,
        AddTopicComponent,
        EntryComponent,
        AddEntryComponent,
        SideEntryComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        RouterModule.forRoot(
          ROUTES,
          { enableTracing: true }
        ),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    })
    .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
