import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../config/material.module';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryOverviewComponent } from './entry-overview/entry-overview.component';
import { EntryService } from './entry-service/entry.service';
import { EntrySideComponent } from './entry-side/entry-side.component';
import { EntryUpdateComponent } from './entry-update/entry-update.component';

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

  ],
  exports: [

    EntryOverviewComponent,

  ]
})
export class EntryModule { }
