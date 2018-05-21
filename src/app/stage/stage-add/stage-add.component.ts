import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
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
  private name: string
  public title = 'Add Stage'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public stageService: StageService,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addStage(): void {

    this.activatedRoute.params.subscribe(params => this.stageService.addStage(params['languageId'], this.name))
    this.nameFormControl.reset()

  }

}
