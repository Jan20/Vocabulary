import { Component, OnInit, Input } from '@angular/core'
import { LanguageService } from '../../language/language-service/language.service'
import { StageService } from '../../stage/stage-service/stage.service'
import { Stage } from '../stage-model/stage'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stage-overview',
  templateUrl: './stage-overview.component.html',
  styleUrls: ['./stage-overview.component.scss']
})
export class StageOverviewComponent implements OnInit {

  ////////////
  // Inputs //
  ////////////
  @Input() languageId: string

  ///////////////
  // Variables //
  ///////////////
  public stage: Stage = new Stage('', '')
  public stages: Stage[] = []

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService,
    public activatedRoute: ActivatedRoute,
    public router: Router,

  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageService.fetchStages(this.languageId)
    
    })

    this.stageService.stagesSubject.subscribe( stages => {

      this.stages = []
      this.stages = stages
      this.stages != null ? this.stage = this.stages[0] : null

    })

  }

  ///////////////
  // Functions //
  ///////////////
  public select(stage: Stage): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${stage.stageId}`])
    
  }

  public add(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/add`])

  }
}
