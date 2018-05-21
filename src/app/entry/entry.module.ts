import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { EntryOverviewComponent } from './entry-overview/entry-overview.component'
import { EntryUpdateComponent } from './entry-update/entry-update.component'
import { EntrySideComponent } from './entry-side/entry-side.component'
import { EntryAddComponent } from './entry-add/entry-add.component'

// Services
import { EntryService } from './entry-service/entry.service'

@NgModule({
  imports: [
  
    CommonModule
  
  ],
  declarations: [

    EntryOverviewComponent,
    EntryUpdateComponent,
    EntrySideComponent,
    EntryAddComponent,
 
  ],
  providers: [

    EntryService

  ]
})
export class EntryModule { }
