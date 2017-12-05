import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
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
  private language: string;
  private stage: string;
  private topic: Topic;
  private topics: Topic[];
  private entries: Entry[];
  private score: number;
  private scores: number[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService,
    private entryService: EntryService,
    private router: Router

  ) {

    this.language = this.languageService.getLanguage().getName();
    this.stage = this.stageService.getStage().getName();
    this.score = 0;
    this.topics = [];       
      
    this.topicService.fetchTopics(this.language, this.stage).valueChanges().subscribe( r => {

      this.topics = [];       

      r.forEach( e => {

        if (e.topic && e.score) {
          
          const m = Math.floor(e.score);
          this.topics.push(new Topic(this.language, this.stage, e.topic, m));
          
        } 
        
        if (e.topic && !e.score) {
          
          this.topics.push(new Topic(this.language, this.stage, e.topic, 0)); 
          
        }

      });

      this.topic = this.topics[0];

    });

  }

  ngOnInit() {  

    this.stageService.getStageHasChanged().subscribe( res => {
    
      this.topicService.fetchTopics(this.language, this.stageService.getStage().getName()).valueChanges().subscribe( r => {

        this.topics = []; 
        
        r.forEach( e => {
          
          if (e.topic && e.score) {
            
            const m = Math.floor(e.score);
            this.topics.push(new Topic(this.language, this.stage, e.topic, m));
            
          } else if (e.topic) {
            
            this.topics.push(new Topic(this.language, this.stage, e.topic, 0)); 
            
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
                            
