import { Component, OnInit } from '@angular/core';

// Model
import { Stage } from '../stage.model';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from '../stage.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.scss']
})
export class AddStageComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService

  ) { }

  ngOnInit() {

  }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.stageService.createStage(

      this.languageService.getLanguage().getName(),
      this.name

    );

    this.name = '';

  }

}
