import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../config/material.module';
import { TopicModule } from '../topic/topic.module';
import { StageAddComponent } from './stage-add/stage-add.component';
import { StageDetailsComponent } from './stage-details/stage-details.component';
import { StageOverviewComponent } from './stage-overview/stage-overview.component';
import { StageService } from './stage-service/stage.service';
import { StageUpdateComponent } from './stage-update/stage-update.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [

    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TopicModule,
    SharedModule,

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
