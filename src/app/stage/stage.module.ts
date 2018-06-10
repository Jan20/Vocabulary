import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Components
import { StageOverviewComponent } from './stage-overview/stage-overview.component'
import { StageUpdateComponent } from './stage-update/stage-update.component'
import { StageAddComponent } from './stage-add/stage-add.component'


// Angular Material
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Services
import { StageService } from './stage-service/stage.service';
import { StageDetailsComponent } from './stage-details/stage-details.component';

import { TopicModule } from '../topic/topic.module';
@NgModule({
  imports: [

    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TopicModule

  ],
  declarations: [

    StageOverviewComponent,
    StageUpdateComponent,
    StageAddComponent,
    StageDetailsComponent,
    
  ],
  providers: [

    StageService

  ],
  exports: [

    StageOverviewComponent

  ]

})
export class StageModule { }
