import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingOverviewComponent } from './landing-overview/landing-overview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [

    CommonModule,
    SharedModule,

  ],
  declarations: [
    
    LandingOverviewComponent
  
  ],
  exports: [

    LandingOverviewComponent,

  ]
})
export class LandingModule { }
