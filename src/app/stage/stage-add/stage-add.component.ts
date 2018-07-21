import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StageService } from './../stage-service/stage.service';

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
  
    private activatedRoute: ActivatedRoute,
    private stageService: StageService,
    private router: Router,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
    this.activatedRoute.params.subscribe(params => this.languageId = params['languageId'])

  }

  ///////////////
  // Functions //
  ///////////////
  public add(): void {

    if (this.name == '') {

      return

    }

    this.stageService.add(this.languageId, this.name)
    this.nameFormControl.reset()
    this.router.navigate([`languages/${this.languageId}/stages`])

  }

  public close(): void {

    this.router.navigate([`languages/${this.languageId}/stages`])

  }
}

