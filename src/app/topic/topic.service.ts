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
  private language: string;
  private stage: string;
  private topic: Topic;
  private topicHasChanged: EventEmitter<any>;

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    private languageService: LanguageService,
    private stageService: StageService

  ) {

    this.topicHasChanged = new EventEmitter();
    this.language = this.languageService.getLanguage().getName();
    this.stage = this.stageService.getStage().getName();

    this.fetchTopics(this.language, this.stage).valueChanges().subscribe( r => {

      const t: Topic[] = [];

      r.forEach( e => {

        if (e.score) {

          t.push(new Topic(this.language, this.stage, e.topic, e.score));

        } else {

          t.push(new Topic(this.language, this.stage, e.topic, 0));          

        }

      });

      this.topic = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////

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

        this.language,
        this.stage,
        sessionStorage.getItem('topic'),
        +sessionStorage.getItem('topicScore')
        
      );
    }
  }

  public getTopicHasChanged(): EventEmitter<any> {

    return this.topicHasChanged;

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

  public setTopicHasChanged(topicHasChanged: EventEmitter<any>): void {

    this.topicHasChanged = topicHasChanged;

  }
}
