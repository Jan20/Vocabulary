// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TopicService {

  ///////////////
  // Variables //
  ///////////////
  private stage: string;
  private topic: string;
  public stageHasChanged: EventEmitter<any> = new EventEmitter();
  public topicHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,

  ) {

  }

  ///////////////
  // Functions //
  ///////////////

  /////////
  // GET //
  /////////
  public getStages(): FirebaseListObservable<any> {

    return this.db.list('Vocabulary');

  }

  public getTopics(stage: string): FirebaseListObservable<any> {

    return this.db.list('Vocabulary' + '/' + stage);

  }

  //////////
  // POST //
  //////////
  public createStage(): void {

    const io = this.db.object('Vocabulary' + '/' + this.stage);
    io.set({
      stage: this.stage
    });

  }

  public createTopic(): void {

    const io = this.db.object('Vocabulary' + '/' + this.stage + '/' + this.topic);
    io.set({
      topic: this.topic,
    });

  }

  ////////////
  // UPDATE //
  ////////////

  ////////////
  // Delete //
  ////////////
  public deleteStage(): void {

    this.db.object('Vocabulary' + '/' + this.stage).remove();

  }

  public deleteTopic(): void {

    this.db.object('Vocabulary' + '/' + this.stage + '/' + this.topic).remove();

  }

  /////////////
  // Getters //
  /////////////
  public getStage(): string {

    return this.stage;

  }

  public getTopic(): string {

    return this.topic;

  }

  /////////////
  // Setters //
  /////////////
  public setStage(stage: string): void {

    this.stage = stage;
    this.stageHasChanged.emit(this.stage);
    sessionStorage.setItem('stage', stage);

  }

  public setTopic(topic: string): void {

    this.topic = topic;
    this.topicHasChanged.emit(this.topic);
    sessionStorage.setItem('topic', topic);

  }

}
