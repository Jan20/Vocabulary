// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Topic } from './topic.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { Observable } from '../../../../Flow/node_modules/rxjs/Observable';

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

    const language = this.languageService.getLanguage().getName();
    const stage = this.stageService.getStage().getName();

    this.fetchTopics(language, stage).valueChanges().subscribe( r => {

      const t: Topic[] = [];

      r.forEach( e => {

        if (e.score) {

          t.push(new Topic(language, stage, e.topic, e.score));

        } else {

          t.push(new Topic(language, stage, e.topic, 0));          

        }

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
  public fetchTopics(language: string, stage: string): AngularFireList<any> {

    return this.db.list('Vocabulary' + '/' + language + '/' + stage);

  }

  ////////////
  // UPDATE //
  ////////////
  public updateTopic(language: string, stage: string, topic: string, score: number): void {
    
    this.db.object('Vocabulary' + '/' + language + '/' + stage + '/' + topic).update(
      
      {language: language, stage: stage, topic: topic, score: score}

    );

    this.setTopic(new Topic(language, stage, topic, score));

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
        sessionStorage.getItem('topic'),
        +sessionStorage.getItem('topicScore')
        
      );
    }
  }

  /////////////
  // Setters //
  /////////////
  public setTopic(topic: Topic): void {

    this.topic = topic;
    const name = this.topic.getName();
    const score = this.topic.getScore().toString();
    sessionStorage.setItem('topic', name);
    sessionStorage.setItem('topicScore', score);
    this.topicHasChanged.emit(this.topic);

  }
}
