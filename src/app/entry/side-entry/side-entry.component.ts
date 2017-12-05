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
  private language: string;
  private stage: string;
  private topic: string;
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

    this.language = this.languageService.getLanguage().getName();
    this.stage = this.stageService.getStage().getName();
    this.topic = this.topicService.getTopic().getName();

    this.flag = false;

    this.entryService.fetchEntries(this.language, this.stage, this.topic).valueChanges().subscribe( res => {

      this.entries = [];

      res.forEach( e => {

        if (e.native) {

          this.entries.push(new Entry(this.language, this.stage, this.topic, e.native, e.foreign, e.score));

        }

      });

      if (this.entries[0]) {
  
        this.entry = this.entries[0];
  
      }

    });
  }
    
  ///////////////////////
  // On Initialization //
  ///////////////////////
  ngOnInit() {
    
    this.entryService.fetchEntries(this.language, this.stage, this.topic).valueChanges().subscribe( r => {

      this.entries = [];

      r.forEach( e => {

        if (e.native) {

          this.entries.push(new Entry(this.language, this.stage, this.topic, e.native, e.foreign, e.score));

        }

      });
    });
  }
    

  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 

    this.toggleFlag();
  
  }
  
  ///////////////
  // Functions //
  ///////////////
  public selectEntry(entry: Entry): void {

    this.entryService.setEntry(entry);

  }

  public toggleFlag(): void {

    if (this.flag) {

      this.flag = false;

    } else {

      this.flag = true;

    }
    
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
