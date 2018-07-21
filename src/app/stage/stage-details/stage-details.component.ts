import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StageService } from '../stage-service/stage.service';

@Component({
  selector: 'app-stage-details',
  templateUrl: './stage-details.component.html',
  styleUrls: ['./stage-details.component.scss']
})
export class StageDetailsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = ''
  private languageId: string
  private stageId: string

  constructor(

    private stageService: StageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.stageService.fetchStage(this.languageId, this.stageId)
    
    })

    this.stageService.stageSubject.subscribe(stage => {

      console.log(stage)
      this.title = stage.name

    })
  }

  ///////////////
  // Functions //
  ///////////////
  public add(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/add]`])

  }

  public select(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}]`])

  }

}
