import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingOverviewComponent } from './landing-overview/landing-overview.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [

    CommonModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  declarations: [
    
    LandingOverviewComponent
  
  ],
  exports: [

    LandingOverviewComponent,

  ]
})
export class LandingModule { }
