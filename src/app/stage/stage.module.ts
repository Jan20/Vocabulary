import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { StageOverviewComponent } from './stage-overview/stage-overview.component'
import { StageUpdateComponent } from './stage-update/stage-update.component'
import { StageAddComponent } from './stage-add/stage-add.component'


// Services
import { StageService } from './stage-service/stage.service';

@NgModule({
  imports: [

    CommonModule
  
  ],
  declarations: [

    StageOverviewComponent,
    StageUpdateComponent,
    StageAddComponent,
    
  ],
  providers: [

    StageService

  ]
})
export class StageModule { }
