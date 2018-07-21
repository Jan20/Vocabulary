import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from '../entry-model/entry';
import { EntryService } from '../entry-service/entry.service';

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
  public flag: boolean
  public entry: Entry
  public entries: Entry[]
  public entryHasChanged: EventEmitter<any> = new EventEmitter()

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public entryService: EntryService,
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

  ///////////////
  // Functions //
  ///////////////
  public selectEntry(entry: Entry): void {

    this.entryService.selectSubject.next(entry)

  }

}
