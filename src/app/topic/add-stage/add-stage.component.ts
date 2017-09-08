import { Component, OnInit } from '@angular/core';

// Model
import { Task } from './../../model/task';

// Services
import { TopicService } from './../../topic/topic.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.scss']
})
export class AddStageComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private flag: boolean;
  private stage: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private topicService: TopicService

  ) {

    this.flag = false;

  }

  ///////////////
  // Functions //
  ///////////////
  public onSelect(): void {

    this.flag = true;

  }

  public save(): void {

    this.topicService.setStage(this.stage);
    this.topicService.createStage();
    this.flag = false;
    this.stage = '';

  }

  ngOnInit() {

  }

}
