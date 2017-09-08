import { Component, OnInit } from '@angular/core';

// Model
import { Task } from './../../model/task';

// Services
import { TopicService } from './../../topic/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private flag: boolean;
  private stage: string;
  private topic: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private topicService: TopicService,

  ) {

    this.flag = false;
    this.stage = this.topicService.getStage();

  }

  ///////////////
  // Functions //
  ///////////////
  public toggleFlag(): void {

    this.flag = true;

  }

  public save(): void {

    this.topicService.setStage(this.stage);
    this.topicService.setTopic(this.topic);
    this.topicService.createTopic();
    this.flag = false;
    this.topic = '';

  }

  ngOnInit() {

    this.topicService.stageHasChanged.subscribe(

      (res) => {

        this.stage = this.topicService.getStage();

      }

    );
  }

}
