import { Injectable, EventEmitter } from '@angular/core';

// Model
import { Entry } from './../model/entry';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class EntryService {

  ////////////////
  // Attributes //
  ////////////////
  private stage: string;
  private topic: string;
  private native: string;
  private foreign: string;
  private score: number;
  private entry: Entry;
  private entries: Entry[];
  public entryHasChanged: EventEmitter<any> = new EventEmitter();
  public entriesHaveChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,

  ) {

    this.stage = sessionStorage.getItem('stage');
    this.topic = sessionStorage.getItem('topic');

    this.getEntries().subscribe( data => {

      const t: Entry[] = [];

      data.forEach(e => {

        const entry = new Entry();
        entry.setStage(e.stage);
        entry.setTopic(e.topic);
        entry.setNative(e.native);
        entry.setForeign(e.foreign);
        entry.setScore(e.score);
        t.push(entry);

      });

      this.entry = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////



  /////////
  // GET //
  /////////
  public getEntries(): FirebaseListObservable<any> {

    return this.db.list('Vocabulary' + '/' + this.stage + '/' + this.topic);

  }


  //////////
  // POST //
  //////////
  public createEntry(): void {

    const io = this.db.object('Vocabulary' + '/' + this.stage + '/' + this.topic + '/' + this.native);

    io.set(
      {
        stage: this.stage,
        topic: this.topic,
        native: this.native,
        foreign: this.foreign,
        score: this.score
      }
    );

    this.entryHasChanged.emit(this.entries);

  }

  ////////////
  // UPDATE //
  ////////////

  ////////////
  // Delete //
  ////////////
  public deleteEntry(): void {

    this.db.object('Vocabulary' + '/' + this.stage + '/' + this.topic + '/' + this.native).remove();

  }


  /////////////
  // Getters //
  /////////////
  public getStage(): string {

    return sessionStorage.getItem('stage');

  }

  public getTopic(): string {

    return sessionStorage.getItem('topic');

  }

  public getNative(): string {

    return this.native;

  }

  public getForeign(): string {

    return this.foreign;

  }

  public getScore(): number {

    return this.score;

  }

  public getEntry(): Entry {

    if (!this.entry) {

      if (sessionStorage.getItem('native') !== 'undefined') {

        this.entry = new Entry();
        this.entry.setStage(sessionStorage.getItem('stage'));
        this.entry.setTopic(sessionStorage.getItem('topic'));
        this.entry.setStage(sessionStorage.getItem('native'));
        this.entry.setStage(sessionStorage.getItem('foreign'));
        this.entry.setScore(+sessionStorage.getItem('score'));

      } else {

        // Todo

      }

    }

    return this.entry;

  }

  /////////////
  // Setters //
  /////////////
  public setStage(stage: string): void {

    this.stage = stage;

  }

  public setTopic(topic: string): void {

    this.topic = topic;

  }

  public setNative(native: string): void {

    this.native = native;

  }

  public setForeign(foreign: string): void {

    this.foreign = foreign;

  }

  public setScore(score: number): void {

    this.score = score;

  }

  public setEntry(entry: Entry): void {

    this.entry = entry;
    sessionStorage.setItem('native', entry.getNative());
    sessionStorage.setItem('foreign', entry.getForeign());
    sessionStorage.setItem('score', '' + entry.getScore());

    this.entryHasChanged.emit(this.entry);

  }

  public setEntries(entries: Entry[]): void {

    this.entries = entries;

  }

}
