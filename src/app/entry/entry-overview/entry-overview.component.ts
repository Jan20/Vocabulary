import { Component, OnInit } from '@angular/core'
import { TopicService } from '../../topic/topic-service/topic.service'
import { EntryService } from '../entry-service/entry.service'
import { Entry } from '../entry-model/entry'
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '../../topic/topic-model/topic';

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
  private entries: Entry[]
  private answer: string
  private pointer: number = 0
  private answerIsCorrect: boolean = true
  public topic: Topic

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private topicService: TopicService,
    private entryService: EntryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) {}

  ///////////////////////
  // On Initialization //
  ///////////////////////
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']
      this.topicService.fetchTopic(this.languageId, this.stageId, this.topicId)
      this.entryService.fetchEntries(this.languageId, this.stageId, this.topicId)

    })

    this.topicService.topicSubject.subscribe(topic => this.topic = topic)
    this.entryService.entriesSubject.subscribe(entries => this.entries = entries)

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

    this.answer = ''

    if (this.answer === this.entry.getForeign()) {

      this.answerIsCorrect = true

      if (this.entry.getScore() < 5) {

        this.topic.setScore(this.topic.getScore() + 1)
        this.topicService.updateTopic(this.languageId, this.stageId, this.topic)
  
        this.entry.setScore(this.entry.getScore() + 1)
        this.entryService.updateEntry(this.languageId, this.stageId, this.topicId, this.entry)
  
      }

      this.pointer < this.entries.length - 1 ? this.pointer = this.pointer + 1 : this.pointer = 0
      this.entry = this.entries[this.pointer]

      return
    
    }

    this.answerIsCorrect = false

    this.topic.setScore(this.topic.getScore() - this.entry.getScore())
    this.topicService.updateTopic(this.languageId, this.stageId, this.topic)

    this.entry.setScore(0)
    this.entryService.updateEntry(this.languageId, this.stageId, this.topicId, this.entry)
    
  }
}