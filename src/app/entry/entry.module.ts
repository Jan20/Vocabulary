import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Material
import { MaterialModule } from '../config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Components
import { EntryOverviewComponent } from './entry-overview/entry-overview.component'
import { EntryUpdateComponent } from './entry-update/entry-update.component'
import { EntrySideComponent } from './entry-side/entry-side.component'
import { EntryAddComponent } from './entry-add/entry-add.component'

// Services
import { EntryService } from './entry-service/entry.service';
import { EntryDetailsComponent } from './entry-details/entry-details.component'

@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  
  ],
  declarations: [

    EntryOverviewComponent,
    EntryUpdateComponent,
    EntrySideComponent,
    EntryAddComponent,
    EntryDetailsComponent,
 
  ],
  providers: [

    EntryService

  ]
})
export class EntryModule { }
