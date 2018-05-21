import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Components
import { LanguageAddComponent } from './language-add/language-add.component';
import { LanguageUpdateComponent } from './language-update/language-update.component';

// Services
import { LanguageService } from './language-service/language.service';

@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  declarations: [

    LanguageAddComponent,
    LanguageUpdateComponent
  
  ],
  
  providers: [
    
    LanguageService

  ]

})
export class LanguageModule { }
