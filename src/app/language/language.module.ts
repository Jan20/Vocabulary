import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LanguageOverviewComponent } from './language-overview/language-overview.component';
import { LanguageAddComponent } from './language-add/language-add.component';
import { LanguageUpdateComponent } from './language-update/language-update.component';

// Services
import { LanguageService } from './language-service/language.service';

@NgModule({
  imports: [
  
    CommonModule
  
  ],
  declarations: [

    LanguageOverviewComponent,
    LanguageAddComponent,
    LanguageUpdateComponent
  
  ],
  
  providers: [
    
    LanguageService

  ]

})
export class LanguageModule { }
