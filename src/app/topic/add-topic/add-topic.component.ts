import { Component, OnInit } from '@angular/core';

// Model
import { Topic } from '../topic.model';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
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
  private name: string;
  private onAddMode: boolean;

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService

  ) {

    this.onAddMode = false;

  }

  ngOnInit() {

    // this.languageService.languageHasChanged.subscribe( res => {

    //   this.language = this.languageService.getLanguage().getName();

    // });

    // this.topicService.stageHasChanged.subscribe( res => {

    //     this.stage = this.topicService.getStage();

    // });

  }

  ///////////////
  // Functions //
  ///////////////
  public toggleOnAddMode(): void {

    if (this.onAddMode === false) {

      this.onAddMode = true;

    } else {

      this.onAddMode = false;

    }

  }

  public save(): void {

    if (this.name === '') { return; };
    console.log('create stage');
    console.log(this.languageService.getLanguage().getName());
    console.log(this.stageService.getStage().getName());
    console.log(this.name);
    this.topicService.createTopic(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName(),
      this.name

    );

    this.toggleOnAddMode();

  }


}
