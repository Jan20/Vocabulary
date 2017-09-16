// Angular Modules
import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';

// Models
import { Entry } from '../entry.model';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
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
  private flag: boolean;
  private entry: Entry;
  private entries: Entry[];
  public entryHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.flag = false;
    this.entry = this.entryService.getEntry();

    this.entryService.fetchEntries(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName(),
      this.topicService.getTopic().getName()

    ).subscribe( res => {
      console.log(res);
      
      this.entries = [];

      res.forEach( e => {
        console.log(e);
        if (e.native) {

          const t = new Entry(

            this.languageService.getLanguage().getName(),
            this.stageService.getStage().getName(),
            this.topicService.getTopic().getName(),
            e.native,
            e.foreign,
            e.score

          );

          this.entries.push(t);

        }

      });
    });
  }

  ///////////////
  // Functions //
  ///////////////
  public toggleFlag(): void {

    this.flag = !this.flag;

  }

  ngOnInit() {

    this.entryService.entryHasChanged.subscribe( res => {

      this.entryService.fetchEntries(

        this.languageService.getLanguage().getName(),
        this.stageService.getStage().getName(),
        this.topicService.getTopic().getName()

      ).subscribe( data => {

        this.entries = [];

        data.forEach( e => {

          if (e.native) {

            const t = new Entry(e.language, e.stage, e.stage, e.native, e.foreign, e.score);
            this.entries.push(t);

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
