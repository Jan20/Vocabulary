import { Component, OnInit, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
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
  private languageId: string
  private stageId: string
  private name: string
  public title = 'Add Topic'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    private activatedRoute: ActivatedRoute,
    private topicService: TopicService,
    private router: Router,

  ) {}

  ngOnInit() {
  
    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']

    })

    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public add(): void {

    if (this.name == '') {return}

      this.topicService.add(this.languageId, this.stageId, this.name)
      this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}`])
      this.nameFormControl.reset()
    
  }

  public close(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}`])

  }
}