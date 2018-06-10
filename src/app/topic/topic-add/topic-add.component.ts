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

  ////////////
  // Inputs //
  ////////////
  @Input() stageId: string

  ///////////////
  // Variables //
  ///////////////
  private languageId: string
  private name: string
  public title = 'Add Topic'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public topicService: TopicService,
    private router: Router,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addTopic(): void {

    if (this.name == '') {

      return

    }

    this.activatedRoute.params.subscribe(params => {
      
      this.languageId = params['languageId']
      
      this.topicService.addTopic(this.languageId, this.stageId, this.name)
      this.router.navigate([`/languages/${this.languageId}`])
      this.nameFormControl.reset()
      this.topicService.toggleInAddMode()

    })
  }

  public returnToOverview(): void {

    this.router.navigate([`/languages/${this.languageId}`])
    this.topicService.toggleInAddMode()

  }
}