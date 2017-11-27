import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Entry } from './entry.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { TopicService } from './../topic/topic.service';
import { Observable } from '../../../../Flow/node_modules/rxjs/Observable';

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

    ).valueChanges().subscribe( res => {

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
  public fetchEntries(language: string, stage: string, topic: string): AngularFireList<any> {

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
  public updateEntry(language: string, stage: string, topic: string, native: string, foreign: string, score: number): void {

    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + topic + '/' + native).update({

      language: language,
      stage: stage,
      topic: topic,
      native: native,
      foreign: foreign,
      score: score

    });

    this.setEntry(new Entry(language, stage, topic, native, foreign, score));

  }

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

    if (this.entry) {

      return this.entry;

    } else {

      return new Entry(

        this.languageService.getLanguage().getName(),
        this.stageService.getStage().getName(),
        this.topicService.getTopic().getName(),
        sessionStorage.getItem('native'),
        sessionStorage.getItem('foreign'),
        +sessionStorage.getItem('score')

      );

    }

  }

  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry = entry;
    const a = this.entry.getNative();
    const b = this.entry.getForeign();
    const c = '' + this.entry.getScore();
    sessionStorage.setItem('native', a);
    sessionStorage.setItem('foreign', b);
    sessionStorage.setItem('score', c);
    this.entryHasChanged.emit(this.entry);

  }

}
