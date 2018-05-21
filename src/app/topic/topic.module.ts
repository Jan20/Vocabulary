import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicService } from './topic-service/topic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Components
import { TopicOverviewComponent } from './topic-overview/topic-overview.component'
import { TopicUpdateComponent } from './topic-update/topic-update.component'
import { TopicAddComponent } from './topic-add/topic-add.component'

// Services


@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [

    TopicOverviewComponent,
    TopicUpdateComponent,
    TopicAddComponent,

  ],
  providers: [

    TopicService,

  ]
})
export class TopicModule { }
