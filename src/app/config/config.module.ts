import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { ROUTES } from './routing.config';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot( 
      ROUTES,
      { enableTracing: true }
    ),

  ],
  declarations: [

    
  ]
})
export class ConfigModule { }
