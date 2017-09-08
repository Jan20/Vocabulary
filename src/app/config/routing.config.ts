import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './../entry/entry.component';
import { LoginComponent } from './../login/login.component';
import { TopicComponent } from './../topic/topic.component';

// Routing
export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'entry', component: EntryComponent },
  { path: '', component: TopicComponent },
];
