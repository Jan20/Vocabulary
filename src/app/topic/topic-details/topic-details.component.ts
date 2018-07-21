import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service/topic.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = 'Test'

  ////////////////
  // Contructor //
  ////////////////
  constructor(

    private topicService: TopicService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.topicService.fetchTopic(params['languageId'], params['stageId'], params['topicId'])

    })

    this.topicService.topicSubject.subscribe(topic => this.title = topic.name)

  }

  ///////////////
  // Functions //
  ///////////////


}
