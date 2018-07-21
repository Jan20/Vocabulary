import { Routes } from '@angular/router';
import { EntryOverviewComponent } from './../entry/entry-overview/entry-overview.component';
import { LanguageAddComponent } from './../language/language-add/language-add.component';
import { LanguageDetailsComponent } from './../language/language-details/language-details.component';
import { LanguageOverviewComponent } from './../language/language-overview/language-overview.component';
import { StageDetailsComponent } from './../stage/stage-details/stage-details.component';
import { StageOverviewComponent } from './../stage/stage-overview/stage-overview.component';
import { TopicDetailsComponent } from './../topic/topic-details/topic-details.component';
import { TopicOverviewComponent } from './../topic/topic-overview/topic-overview.component';
import { UserLoginComponent } from './../user/user-login/user-login.component';
import { LandingOverviewComponent } from './../landing/landing-overview/landing-overview.component';
import { StageAddComponent } from '../stage/stage-add/stage-add.component';
import { TopicAddComponent } from '../topic/topic-add/topic-add.component';

export const ROUTES: Routes = [

  { path: '', component: LandingOverviewComponent},
  { path: 'languages', component: LanguageOverviewComponent},
  { path: 'languages/add', component: LanguageAddComponent},
  { path: 'languages/:languageId', component: LanguageDetailsComponent},
  { path: 'languages/:languageId/stages', component: StageOverviewComponent},
  { path: 'languages/:languageId/stages/add', component: StageAddComponent},
  { path: 'languages/:languageId/stages/:stageId', component: StageDetailsComponent},
  { path: 'languages/:languageId/stages/:stageId/topics', component: TopicOverviewComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/add', component: TopicAddComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId', component: TopicDetailsComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId/entries', component: EntryOverviewComponent},
  { path: 'languages/:languageId/stages/:stageId/topics/:topicId/entries/:entryId', component: EntryOverviewComponent},
  { path: 'user', component: UserLoginComponent },

]