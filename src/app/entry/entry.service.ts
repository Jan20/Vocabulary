import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Model
import { Entry } from './entry.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { TopicService } from './../topic/topic.service';

@Injectable()
export class EntryService {

  ////////////////
  // Attributes //
  ////////////////
  private entry: Entry;
  private entries: Entry[];
  private onUpdateMode: boolean;
  public onUpdateModeHasChanged: EventEmitter<any> = new EventEmitter();
  public entryHasChanged: EventEmitter<any> = new EventEmitter();
  public entriesHaveChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    public languageService: LanguageService,
    public stageService: StageService,
    public topicService: TopicService

  ) {

    this.onUpdateMode = false;

    this.fetchEntries(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName(),
      this.topicService.getTopic().getName()

    ).subscribe( res => {

      const t: Entry[] = [];

      res.forEach( e => {

        if (e.native) {

          const l: Entry = new Entry(e.language, e.stage, e.topic, e.native, e.foreign, e.number);
          t.push(l);

        }

      });

      this.entry = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////

  public toggleOnUpdateMode(): void {

    if (this.onUpdateMode === true) {

      this.onUpdateMode = false;
      this.onUpdateModeHasChanged.emit(this.onUpdateMode);

    } else {

      this.onUpdateMode = true;
      this.onUpdateModeHasChanged.emit(this.onUpdateMode);

    }

  }

  /////////////////////////
  // Database Connection //
  /////////////////////////

  /////////
  // GET //
  /////////
  public fetchEntries(language: string, stage: string, topic: string): FirebaseListObservable<any> {

    return this.db.list('Vocabulary' + '/' + language + '/' + stage + '/' + topic);

  }

  //////////
  // POST //
  //////////
  public createEntry(language: string, stage: string, topic: string, native: string, foreign: string, score: number): void {

    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + topic + '/' + native).set({

      language: language,
      stage: stage,
      topic: topic,
      native: native,
      foreign: foreign,
      score: score

    });

    this.entriesHaveChanged.emit(this.entries);

  }

  ////////////
  // UPDATE //
  ////////////

  ////////////
  // Delete //
  ////////////
  public deleteEntry(language: string, stage: string, topic: string, native: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + topic + '/' + native).remove();

  }

  /////////////
  // Getters //
  /////////////
  public getOnUpdateMode(): boolean {

      return this.onUpdateMode;

  }

  public getEntry(): Entry {

    return this.entry;

  }

  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry = entry;

  }

}
