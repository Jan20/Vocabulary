import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from './../stage-model/stage'
import { StageService } from './../stage-service/stage.service'

@Component({
  selector: 'app-stage-add',
  templateUrl: './stage-add.component.html',
  styleUrls: ['./stage-add.component.scss']
})
export class StageAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private languageId: string
  private name: string
  public title = 'Add Stage'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public stageService: StageService,
    private router: Router,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addStage(): void {

    if (this.name == '') {

      return

    }

    this.activatedRoute.params.subscribe(params => {
      
      this.languageId = params['languageId']
      this.stageService.addStage(this.languageId, this.name)
      this.router.navigate([`languages/${this.languageId}`])
      this.nameFormControl.reset()
      this.stageService.toggleInAddMode()

    })
  }

  public returnToOverview(): void {

    this.router.navigate([`languages/${this.languageId}`])
    this.stageService.toggleInAddMode()

  }
}

