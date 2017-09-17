import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Model
import { Topic } from './topic.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { TopicService } from './topic.service';

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

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService,
    public topicService: TopicService,
    private router: Router

  ) {

    this.topicService.fetchTopics(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName()

    ).subscribe( res => {

      this.topics = [];

      res.forEach( e => {

        if (e.topic) {

          this.topics.push(new Topic(

            this.languageService.getLanguage().getName(),
            this.stageService.getStage().getName(),
            e.topic));

        }

      });

      this.topic = this.topics[0];
  
    });

  }

  ngOnInit() {

    this.stageService.stageHasChanged.subscribe( data => {
      this.topicService.fetchTopics(

        this.languageService.getLanguage().getName(),
        this.stageService.getStage().getName()

      ).subscribe( res => {

        this.topics = [];

        res.forEach( e => {

          if (e.topic) {

            this.topics.push(new Topic(

              this.languageService.getLanguage().getName(),
              this.stageService.getStage().getName(),
              e.topic));

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
  public getTopics(): Topic[] {

    return this.topics;

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


}
