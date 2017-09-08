// Custom Components
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

// Routing
import { ROUTES } from './../config/routing.config';
import { RouterModule, Routes } from '@angular/router';

// Services

// Custom Components
import { MenuComponent } from './menu.component';
import { LoginComponent } from './../login/login.component';
import { TopicComponent } from './../topic/topic.component';
import { AddStageComponent } from './../topic/add-stage/add-stage.component';
import { AddTopicComponent } from './../topic/add-topic/add-topic.component';
import { EntryComponent } from './../entry/entry.component';
import { AddEntryComponent } from './../entry/add-entry/add-entry.component';
import { SideEntryComponent } from './../entry/side-entry/side-entry.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
