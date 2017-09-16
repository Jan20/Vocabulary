// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Model
import { Topic } from './topic.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';

@Injectable()
export class TopicService {

  ///////////////
  // Variables //
  ///////////////
  private topic: Topic;
  public topicHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    public languageService: LanguageService,
    public stageService: StageService

  ) {

    this.fetchTopics(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName()

    ).subscribe( res => {

      const t: Topic[] = [];

      res.forEach( e => {

        t.push(new Topic(

          this.languageService.getLanguage().getName(),
          this.stageService.getStage().getName(),
          e.topic));

      });
      this.topic = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////

  /////////////////////////
  // Database Connection //
  /////////////////////////

  /////////
  // GET //
  /////////
  public fetchTopics(language: string, stage: string): FirebaseListObservable<any> {

    return this.db.list('Vocabulary' + '/' + language + '/' + stage);

  }

  //////////
  // POST //
  //////////
  public createTopic(language: string, stage: string, name: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + name).set({

      topic: name

    });

  }

  ////////////
  // UPDATE //
  ////////////

  ////////////
  // Delete //
  ////////////
  public deleteTopic(language: string, stage: string, topic: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + topic).remove();

  }

  /////////////
  // Getters //
  /////////////
  public getTopic(): Topic {

    if (this.topic) {

      return this.topic;

    } else {

      return new Topic(

        this.languageService.getLanguage().getName(),
        this.stageService.getStage().getName(),
        sessionStorage.getItem('topic')

      );
    }
  }

  /////////////
  // Setters //
  /////////////
  public setTopic(topic: Topic): void {

    this.topic = topic;
    const name = this.topic.getName();
    sessionStorage.setItem('topic', name);
    this.topicHasChanged.emit(this.topic);

  }
}
