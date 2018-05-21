import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { EntryOverviewComponent } from './entry-overview/entry-overview.component'
import { EntryAddComponent } from './entry-add/entry-add.component'
import { EntryUpdateComponent } from './entry-update/entry-update.component'
import { EntrySideComponent } from './entry-side/entry-side.component'

// Services
import { EntryService } from './entry-service/entry.service'

@NgModule({
  imports: [
  
    CommonModule
  
  ],
  declarations: [

    EntryOverviewComponent,
    EntryAddComponent,
    EntryUpdateComponent,
    EntrySideComponent,

  ],
  providers: [

    EntryService

  ]
})
export class EntryModule { }
