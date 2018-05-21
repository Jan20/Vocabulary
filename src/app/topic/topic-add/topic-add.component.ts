import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Topic } from './../topic-model/topic'
import { TopicService } from './../topic-service/topic.service'

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.scss']
})
export class TopicAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string
  public title = 'Add Topic'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public topicService: TopicService,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addMarket(): void {

    this.activatedRoute.params.subscribe(params => this.topicService.addTopic(params['language'], params['stage'], this.name))
    this.nameFormControl.reset()

  }
}