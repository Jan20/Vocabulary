import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Model
import { Topic } from './topic.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { TopicService } from './topic.service';
import { EntryService } from '../entry/entry.service';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private topic: Topic;
  private topics: Topic[];
  private entries: Entry[];
  private score: number;
  private scores: number[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService,
    public topicService: TopicService,
    public entryService: EntryService,
    private router: Router

  ) {

    this.score = 0;
    const language = this.languageService.getLanguage().getName();
    const stage = this.stageService.getStage().getName();
      
    this.topicService.fetchTopics(language, stage).valueChanges().subscribe( r => {

      this.topics = [];       

      r.forEach( e => {

        if (e.topic && e.score) {
          
          const m = Math.floor(e.score);
          let t = new Topic(language, stage, e.topic, m);
          this.topics.push(t);
          
        } 
        
        if (e.topic && !e.score) {
          
          let t = new Topic(language, stage, e.topic, 0);
          this.topics.push(t);
          
        }


      });

      this.topic = this.topics[0];

    });

  }

  ngOnInit() {
    

    this.stageService.stageHasChanged.subscribe( res => {
      
      const language = this.languageService.getLanguage().getName();
      const stage = this.stageService.getStage().getName();
      
    this.topicService.fetchTopics(language, stage).valueChanges().subscribe( r => {

      this.topics = []; 
      
      r.forEach( e => {
        
        if (e.topic && e.score) {
          console.log(e );
          
          const m = Math.floor(e.score);
          let t = new Topic(language, stage, e.topic, m);
          this.topics.push(t);
          
        } else if (e.topic) {
          
          let t = new Topic(language, stage, e.topic, 0);
          this.topics.push(t);
          console.log(this.topics);
          
        }


      });

      this.topic = this.topics[0];

    });
  });
  }

  ///////////////
  // Functions //
  ///////////////
  public deleteTopic(topic: Topic): void {

    this.topicService.deleteTopic(topic.getLanguage(), topic.getStage(), topic.getName());

  }

  public selectTopic(topic: Topic): void {

    this.topicService.setTopic(topic);
    this.router.navigate(['/entry']);

  }

  /////////////
  // Getters //
  /////////////
  public getTopic(): Topic {

    return this.topic;

  }

  public getTopics(): Topic[] {

    return this.topics;

  }

  public getScore(): number {

    return this.score;

  }

  public getScores(): number[] {

    return this.scores;

  }

  /////////////
  // Setters //
  /////////////
  public setTopic(topic: Topic): void {

    this.topic = topic;

  }

  public setTopics(topics: Topic[]): void {

    this.topics = topics;

  }

  public setScore(score: number): void {

    this.score = score;

  }

  public setScores(scores: number[]): void {

    this.scores = scores;

  }


}
                            
