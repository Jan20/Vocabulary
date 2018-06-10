import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Components
import { UserLoginComponent } from './../user/user-login/user-login.component'
import { LanguageOverviewComponent } from './../language/language-overview/language-overview.component'
import { LanguageDetailsComponent } from './../language/language-details/language-details.component'
import { StageOverviewComponent } from './../stage/stage-overview/stage-overview.component'
import { StageDetailsComponent } from './../stage/stage-details/stage-details.component'
import { TopicOverviewComponent } from './../topic/topic-overview/topic-overview.component'
import { TopicDetailsComponent } from './../topic/topic-details/topic-details.component'
import { EntryOverviewComponent } from './../entry/entry-overview/entry-overview.component'
import { EntryDetailsComponent } from './../entry/entry-details/entry-details.component'

// Routing
export const ROUTES: Routes = [

  { path: '', component: LanguageOverviewComponent},
  { path: 'languages', component: LanguageOverviewComponent},
  { path: 'languages/:languageId', component: LanguageDetailsComponent},
  { path: 'languages/:languageId/stages', component: StageOverviewComponent},
  { path: 'languages/:languageId/stages/:stageId', component: StageDetailsComponent},
  { path: 'languages/:languageId/stages/:stageId/topics', component: TopicOverviewComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId', component: TopicDetailsComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId/entries', component: EntryOverviewComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId/entries/:entryId', component: EntryDetailsComponent},
  { path: 'user', component: UserLoginComponent },

]