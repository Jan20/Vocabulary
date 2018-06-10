import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  constructor(

    public topicService: TopicService

  ) { }

  ngOnInit() {
  }



}
