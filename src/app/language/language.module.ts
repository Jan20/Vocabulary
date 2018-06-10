import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Material
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Components
import { LanguageAddComponent } from './language-add/language-add.component';
import { LanguageUpdateComponent } from './language-update/language-update.component';

// Services
import { LanguageService } from './language-service/language.service';
import { LanguageOverviewComponent } from './language-overview/language-overview.component';
import { LanguageDetailsComponent } from './language-details/language-details.component';

@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  
  ],
  declarations: [

    LanguageAddComponent,
    LanguageUpdateComponent,
    LanguageOverviewComponent,
    LanguageDetailsComponent
  
  ],
  providers: [
    
    LanguageService

  ]
})
export class LanguageModule { }
