import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from '../entry-model/entry';
import { EntryService } from '../entry-service/entry.service';

@Component({
  selector: 'app-entry-overview',
  templateUrl: './entry-overview.component.html',
  styleUrls: ['./entry-overview.component.scss']
})
export class EntryOverviewComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private languageId: string
  private stageId: string
  private topicId: string
  private entry: Entry = new Entry('', '', 0)
  private entries: Entry[] = [new Entry('', '', 0)]
  private pointer: number = 0
  public answer: string
  public answerIsCorrect: boolean = true

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private entryService: EntryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']
      this.entryService.fetchEntries(this.languageId, this.stageId, this.topicId)

    })

    this.entryService.entriesSubject.subscribe(entries => {

      this.entries = entries

      if (this.pointer === 0) {
        this.entries[0] != null && this.entries[0] != undefined ? this.entry = this.entries[0] : null
      }
      
    })

    this.entryService.selectSubject.subscribe(entry => this.entry = entry)

  }

  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 
  
    this.check()
  
  }

  ///////////////
  // Functions //
  ///////////////
  public check() {

    if (this.answer === this.entry.foreign) {

      this.answerIsCorrect = true

      if (this.entry.score < 5) {

        this.entry.score = this.entry.score + 1
        this.entryService.changeScore(this.languageId, this.stageId, this.topicId, this.entry)
  
      }

      this.pointer < this.entries.length - 1 ? this.pointer = this.pointer + 1 : this.pointer = 0
      this.entry = this.entries[this.pointer]

      this.answer = ''
    
    } else {

      this.answerIsCorrect = false
      this.entry.score = 0
      this.entryService.changeScore(this.languageId, this.stageId, this.topicId, this.entry)

    }
  }

  public add(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}/entries/add`])

  }

  public update(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}/entries/${this.entry.entryId}/update`])

  }

}