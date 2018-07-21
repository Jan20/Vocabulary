import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {AngularFireModule} from 'angularFire2'
import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StageModule } from './../stage/stage.module'

import { LanguageAddComponent } from './language-add/language-add.component'
import { LanguageUpdateComponent } from './language-update/language-update.component'

import { LanguageService } from './language-service/language.service'
import { LanguageOverviewComponent } from './language-overview/language-overview.component'
import { LanguageDetailsComponent } from './language-details/language-details.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule,
    StageModule,
    SharedModule,
  
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
