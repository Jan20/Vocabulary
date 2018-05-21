import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './../login/login.component';
import { LanguageComponent } from './../language/language.component';
import { StageComponent } from './../stage/stage.component';
import { TopicComponent } from './../topic/topic.component';
import { EntryComponent } from './../entry/entry.component';

// Routing
export const ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'language', component: LanguageComponent },
  { path: '', component: StageComponent },
  { path: 'entry', component: EntryComponent },

];
