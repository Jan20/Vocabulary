import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Services
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
  private stage: string;
  private stages: string[];
  private topic: string;
  private topics: string[];
  private newStage: string;
  private newTopic: string;
  private flag: boolean;

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private topicService: TopicService,
    private router: Router

  ) {

    this.flag = false;

    this.topicService.getStages().subscribe( data => {

      this.stages = [];

      data.forEach( e => {
        this.stages.push(e.stage);
      });

      this.stage = this.stages[0];

      this.topicService.setStage(this.stage);


    });

  }

  ngOnInit() {

    this.topicService.stageHasChanged.subscribe( (res) => {

      this.stage = this.topicService.getStage();

      this.topicService.getTopics(this.stage).subscribe( data => {

        this.topics = [];
        data.forEach( e => {

          if (e.topic) {
            this.topics.push(e);

          }
        });

      });
    });

  }

  ///////////////
  // Functions //
  ///////////////
  public toggleFlag(): void {

    this.flag = true;

  }

  public createStage(): void {

    this.topicService.setStage(this.newStage);
    this.topicService.createStage();
    this.flag = false;
    this.newStage = '';

  }

  public createTopic(): void {

    this.topicService.setTopic(this.newTopic);
    this.topicService.createTopic();
    this.flag = false;
    this.newTopic = '';

  }

  public deleteStage(): void {

    this.topicService.setStage(this.stage);
    this.topicService.deleteStage();

  }

  public deleteTopic(topic: string): void {

    this.topicService.setTopic(topic);
    this.topicService.deleteTopic();

  }

  public selectTopic(topic: string): void {

    this.topicService.setTopic(topic);
    this.router.navigate(['/entry']);


  }

  /////////////
  // Getters //
  /////////////
  public getStages(): string {

    return this.newTopic;

  }

  /////////////
  // Setters //
  /////////////
  public setStages(stages: string[]): void {

    this.stages = stages;

  }

  public setStage(stage: string): void {

    this.topicService.setStage(stage);

  }


}
