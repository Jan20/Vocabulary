// Angular Modules
import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';

// Models
import { Entry } from './../../model/entry';

// Services
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-side-entry',
  templateUrl: './side-entry.component.html',
  styleUrls: ['./side-entry.component.scss']
})
export class SideEntryComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private stage: string;
  private topic: string;
  private native: string;
  private foreign: string;
  private score: number;
  private flag: boolean;
  private entries: Entry[] = [];
  public entryHasChanged: EventEmitter<any> = new EventEmitter();
  public entriesHaveChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.flag = false;
    this.score = 0;
    this.stage = this.entryService.getStage();
    this.topic = this.entryService.getTopic();

    this.entryService.setStage(this.stage);
    this.entryService.setTopic(this.topic);
    this.entryService.getEntries().subscribe( data => {
      this.entries = [];
      data.forEach( e => {

        if (e.native) {

          const entry = new Entry();
          entry.setStage(this.stage);
          entry.setTopic(this.topic);
          entry.setNative(e.native);
          entry.setForeign(e.foreign);
          entry.setScore(e.score);
          this.entries.push(entry);

        }

      });
    });
  }

  ///////////////
  // Functions //
  ///////////////
  public toggleFlag(): void {

    if (this.flag === true) {

      this.flag = false;

    } else {

      this.flag = true;

    }
  }

  ngOnInit() {
    this.entryService.entryHasChanged.subscribe( data => {

      this.entryService.getEntries().subscribe( data2 => {

      this.entries = [];

      data2.forEach( e => {

        if (e.topic) {

          const entry = new Entry();
          entry.setStage(this.stage);
          entry.setTopic(this.topic);
          entry.setNative(e.native);
          entry.setForeign(e.foreign);
          entry.setScore(e.score);
          this.entries.push(entry);

        }
      });
      });
    });
  }

  public select(entry: Entry): void {

    this.entryService.setEntry(entry);

  }

  /////////////
  // Getters //
  /////////////
  public getEntries(): Entry[] {

    return this.entries;

  }


  /////////////
  // Setters //
  /////////////
  public setEntries(entries: Entry[]): void {

    this.entries = entries;

  }

  public setEntry(entry: Entry): void {

    this.entryService.setEntry(entry);

  }

}
