import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Material
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Modules
import { EntryModule } from '../entry/entry.module'

// Components
import { TopicOverviewComponent } from './topic-overview/topic-overview.component'
import { TopicUpdateComponent } from './topic-update/topic-update.component'
import { TopicAddComponent } from './topic-add/topic-add.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component'

// Services
import { TopicService } from './topic-service/topic.service';


@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    EntryModule,
    
  ],
  declarations: [

    TopicOverviewComponent,
    TopicUpdateComponent,
    TopicAddComponent,
    TopicDetailsComponent,

  ],
  providers: [

    TopicService,

  ],
  exports: [

    TopicOverviewComponent,
    TopicAddComponent,
    
  ]
})
export class TopicModule { }
