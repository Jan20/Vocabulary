import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { StageService } from '../stage-service/stage.service';

@Component({
  selector: 'app-stage-update',
  templateUrl: './stage-update.component.html',
  styleUrls: ['./stage-update.component.scss']
})
export class StageUpdateComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string
  public title: string = 'Edit Stage'
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

  }

  ///////////////
  // Functions //
  ///////////////
  public update(): void {

    this.activatedRoute.params.subscribe(params => {
      
      this.stageService.update(params['languageId'], params['stageId'], name)
      this.router.navigate([`/languages/${params['languageId']}/stages/${this.name.toLowerCase()}`])
      this.nameFormControl.reset()

    })

  }

  public close(): void {

    this.activatedRoute.params.subscribe(params => {

      this.router.navigate([`/languages/${params['languageId']}/stages`])
      this.nameFormControl.reset()

    })

  }

}
