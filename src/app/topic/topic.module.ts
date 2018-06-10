import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicService } from './topic-service/topic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Material
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Components
import { TopicOverviewComponent } from './topic-overview/topic-overview.component'
import { TopicUpdateComponent } from './topic-update/topic-update.component'
import { TopicAddComponent } from './topic-add/topic-add.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component'

// Services


@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,

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
