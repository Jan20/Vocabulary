import { Component, OnInit } from '@angular/core';

// Model
import { Stage } from './stage.model';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private language: string;
  private stage: Stage;
  private stages: Stage[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService,

  ) {

    this.language = this.languageService.getLanguage().getName();

    this.stageService.fetchStages(this.language).valueChanges().subscribe( r => {

      this.stages = [];
      
      r.forEach( e => {

        if (e.stage) {

          this.stages.push(new Stage(this.language, e.stage));

        }

      });
      console.log(this.stages[0]);
      this.stageService.setStage(this.stages[0]);
      
    });

  }

  ngOnInit() {

    this.languageService.languageHasChanged.subscribe( r => {

      this.stageService.fetchStages(this.language).valueChanges().subscribe( r => {

        this.stages = [];

        r.forEach( e => {

          if (e.stage) {

            this.stages.push(new Stage(this.language, e.stage));

          }

        });
        console.log(this.stages[0]);
        this.stageService.setStage(this.stages[0]);
        
      });
    });

  }

  ///////////////
  // Functions //
  ///////////////
  public deleteStage(stage: Stage): void {

    this.stageService.deleteStage(stage.getLanguage(), stage.getName());

  }

  public selectStage(stage: Stage): void {

    this.stage = stage;
    this.stageService.setStage(stage);

  }

  /////////////
  // Getters //
  /////////////
  public getStage(): Stage {

    return this.stage;

  }

  public getStages(): Stage[] {

    return this.stages;

  }

  /////////////
  // Setters //
  /////////////
  public setStage(stage: Stage): void {

    this.stage = stage;

  }

  public setStages(stages: Stage[]): void {

    this.stages = stages;

  }

}
