import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { TopicService } from '../topic-service/topic.service'
import { Topic } from './../topic-model/topic'

@Component({
  selector: 'app-topic-overview',
  templateUrl: './topic-overview.component.html',
  styleUrls: ['./topic-overview.component.scss']
})
export class TopicOverviewComponent implements OnInit {

  ////////////
  // Inputs //
  ////////////
  @Input() stageId: string
  
  ///////////////
  // Variables //
  ///////////////
  private languageId: string
  public topics: Topic[]

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public topicService: TopicService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit() {  

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.topicService.fetchTopics(this.languageId, this.stageId)

    })

    this.topicService.topicsSubject.subscribe(topics => this.topics = topics)
    
  }

  ///////////////
  // Functions //
  ///////////////
  public selectTopic(topicId: string): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${topicId}`])

  }

}
                            
