// Angular Modules
import { Component, OnInit, Injectable, EventEmitter } from '@angular/core'
import { EntryService } from '../entry-service/entry.service'
import { Entry } from '../entry-model/entry'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry-side',
  templateUrl: './entry-side.component.html',
  styleUrls: ['./entry-side.component.scss']
})
export class EntrySideComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private languageId: string
  private stageId: string
  private topicId: string
  private flag: boolean
  public entry: Entry
  public entries: Entry[]
  public entryHasChanged: EventEmitter<any> = new EventEmitter()

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private entryService: EntryService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}
    
  ///////////////////////
  // On Initialization //
  ///////////////////////
  ngOnInit() {

    this.flag = false

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']

      this.entryService.fetchEntries(this.languageId, this.stageId, this.topicId)

    })

    this.entryService.entriesSubject.subscribe(entries => {
    
      this.entries = entries
      this.entry = this.entries[0]

    })
    
  }
    

  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 

    this.toggleFlag()
  
  }
  
  ///////////////
  // Functions //
  ///////////////
  public selectEntry(entry: Entry): void {

    this.router.navigate([`/${this.languageId}/${this.stageId}/${this.topicId}/${entry.getEntryId()}`])
    this.entryService.setEntry(entry)

  }

  public toggleFlag(): void {

    this.flag ? this.flag = false : this.flag = true
    
  }

}
