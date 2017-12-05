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
  private language: string;
  private stage: string;
  private topic: string;
  private entry: Entry;
  private entries: Entry[];
  private onUpdateMode: boolean;
  public onUpdateModeHasChanged: EventEmitter<any> = new EventEmitter();
  public entryHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService

  ) {

    this.language = languageService.getLanguage().getName(),
    this.stage = stageService.getStage().getName(),
    this.topic = topicService.getTopic().getName(),
    this.onUpdateMode = false;

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

        this.language
        this.stage
        this.topic
        sessionStorage.getItem('native'),
        sessionStorage.getItem('foreign'),
        +sessionStorage.getItem('score')

      );
    }
  }

  public getEntryHasChanged(): EventEmitter<any> {

    return this.entryHasChanged;

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
    this.entryHasChanged.emit();

  }

  public setEntryHasChanged(entryHasChanged: EventEmitter<any>): void {

    this.entryHasChanged = entryHasChanged;

  }
}
