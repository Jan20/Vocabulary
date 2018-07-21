import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service/topic.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  private languageId: string
  private stageId: string
  private topicId: string

  ////////////////
  // Contructor //
  ////////////////
  constructor(

    private topicService: TopicService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']
      this.topicService.fetchTopic(this.languageId, this.stageId, this.topicId)

    })

    this.topicService.topicSubject.subscribe(topic => this.title = topic.name)

  }

  ///////////////
  // Functions //
  ///////////////
  public update(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}/update`])

  }

  public delete(): void {

    this.topicService.delete(this.languageId, this.stageId, this.topicId)
    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics`])
    
  }

}
