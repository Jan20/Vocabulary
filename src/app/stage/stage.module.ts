import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { StageAddComponent } from './stage-add/stage-add.component'


// Services
import { StageService } from './stage-service/stage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [

    StageService

  ]
})
export class StageModule { }
