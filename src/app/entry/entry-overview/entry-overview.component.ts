import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '../../topic/topic-model/topic';
import { TopicService } from '../../topic/topic-service/topic.service';
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
  private answer: string
  private pointer: number = 0
  private answerIsCorrect: boolean = true
  public topic: Topic

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private topicService: TopicService,
    public entryService: EntryService,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']
      this.topicService.fetchTopic(this.languageId, this.stageId, this.topicId)
      this.entryService.fetchEntries(this.languageId, this.stageId, this.topicId)

    })

    this.topicService.topicSubject.subscribe(topic => this.topic = topic)
    this.entryService.entriesSubject.subscribe(entries => {
      
      if (this.entryService.getEntry() == null) {

        this.entries = entries
        if (this.entries[0] != null && this.entries[0] != undefined) {

          this.entry = this.entries[0]

        }

      }
      
    })

    this.entryService.selectSubject.subscribe(boolean => {

      this.entry = this.entryService.getEntry()
      
      for(let i = 0; i < this.entries.length; i++) {

        this.entry.native === this.entries[i].native ? this.pointer = i : null

      }
    })
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

        this.topic.score = this.topic.score + 1
        this.topicService.updateTopic(this.languageId, this.stageId, this.topic)
  
        this.entry.score = this.entry.score + 1
        this.entryService.updateEntry(this.languageId, this.stageId, this.topicId, this.entry)
  
      }

      this.pointer < this.entries.length - 1 ? this.pointer = this.pointer + 1 : this.pointer = 0
      this.entry = this.entries[this.pointer]

      this.answer = ''
    
    } else {

      this.answerIsCorrect = false

      this.topic.score = this.topic.score - this.entry.score
      this.topicService.updateTopic(this.languageId, this.stageId, this.topic)
  
      this.entry.score = 0
      this.entryService.updateEntry(this.languageId, this.stageId, this.topicId, this.entry)

    }
  }
}