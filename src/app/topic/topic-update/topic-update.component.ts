import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { TopicService } from '../topic-service/topic.service';

@Component({
  selector: 'app-topic-update',
  templateUrl: './topic-update.component.html',
  styleUrls: ['./topic-update.component.scss']
})
export class TopicUpdateComponent implements OnInit {


  ///////////////
  // Variables //
  ///////////////
  private name: string
  private languageId: string
  private stageId: string
  private topicId: string
  public title: string = 'Edit Topic'
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
      this.topicId = params['topicId']

    })

    this.nameFormControl.valueChanges.subscribe(name => this.name = name)

  }

  ///////////////
  // Functions //
  ///////////////
  public update(): void {

    this.topicService.update(this.languageId, this.stageId, this.topicId, name)
    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics`])
    this.nameFormControl.reset()

  }

  public close(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics`])
    this.nameFormControl.reset()

  }


}
