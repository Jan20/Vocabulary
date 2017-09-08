import { Component, OnInit } from '@angular/core';

// Model
import { Task } from './../../model/task';

// Services
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private stage: string;
  private topic: string;
  private native: string;
  private foreign: string;
  private score: number;
  private text: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.score = 0;
    this.stage = this.topicService.getStage();
    this.topic = this.topicService.getTopic();

  }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.entryService.setNative(this.native);
    this.entryService.setForeign(this.foreign);
    this.entryService.setScore(this.score);
    this.entryService.createEntry();
    this.native = '';
    this.foreign = '';

  }

  ngOnInit() {

    this.topicService.stageHasChanged.subscribe(

      (res) => {

        this.topic = this.topicService.getStage();

      }

    );

    this.topicService.topicHasChanged.subscribe(

      (res) => {

        this.topic = this.topicService.getTopic();

      }

    );
  }

}
