import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './../model/blog-entry';

// Services
import { TopicService } from './../topic/topic.service';
import { EntryService } from './entry.service';

// Models
import { Entry } from './../model/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  private stage: string;
  private topic: string;
  private entry: Entry;
  private entries: Entry[] = [];
  private answer: string;
  private pointer: number;

  constructor(

    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.stage = this.entryService.getStage();
    this.topic = this.entryService.getTopic();
    this.entry = this.entryService.getEntry();
    this.entryService.getEntries().subscribe( data => {

      this.entries = [];

      data.forEach( e => {

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

  }

  ngOnInit() {

    this.entryService.entryHasChanged.subscribe( data => {

      this.entry = this.entryService.getEntry();

      for (let i = 0; i < this.entries.length; i++) {

        if (this.entries[i].getNative() === this.entry.getNative()) {

          this.pointer = i;

        }

      }

    });

  }

  ///////////////
  // Functions //
  ///////////////
  public check() {

    if (this.answer === this.entry.getForeign()) {



      this.answer = '';

      if ( this.entry.getScore() < 6) {

        this.entryService.setNative(this.entry.getNative());
        this.entryService.setForeign(this.entry.getForeign());
        this.entryService.setScore(this.entry.getScore() + 1);
        this.entryService.createEntry();

      }

      this.pointer++;

      if (this.entries[this.pointer]) {

        this.entry = this.entries[this.pointer];

      }

    }

  }


  public deleteEntry(native: string): void {

    this.entryService.setNative(native);
    this.entryService.deleteEntry();

  }

  /////////////
  // Getters //
  /////////////
  public getEntry(): Entry {

    return this.entry;

  }

  public getEntries(): Entry[] {

    return this.entries;

  }

  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry = entry;

  }

  public setEntries(entries: Entry[]): void {

    this.entries = entries;

  }

}
