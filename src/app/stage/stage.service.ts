// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Stage } from './stage.model';

// Services
import { LanguageService } from './../language/language.service';
import { Observable } from '../../../../Flow/node_modules/rxjs/Observable';

@Injectable()
export class StageService {

  ///////////////
  // Variables //
  ///////////////
  private language: string;
  private stage: Stage;
  private stageHasChanged: EventEmitter<any>;

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    private languageService: LanguageService,

  ) {

    this.language = this.languageService.getLanguage().getName();    
    this.stageHasChanged = new EventEmitter();

  }

  ///////////////
  // Functions //
  ///////////////


  /////////
  // GET //
  /////////
  public fetchStages(language: string): AngularFireList<any> {

    return this.db.list('Vocabulary' + '/' + language);

  }

  //////////
  // POST //
  //////////
  public createStage(language: string, name: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + name).set({ stage: name });
    this.setStage(new Stage(language, name));

  }

  ////////////
  // UPDATE //
  ////////////

  ////////////
  // Delete //
  ////////////
  public deleteStage(language: string, name: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + name).remove();

  }

  /////////////
  // Getters //
  /////////////
  public getStage(): Stage {

    if (this.stage) {

      return this.stage;

    } else {

      return new Stage( this.language, sessionStorage.getItem('stage'));

    }

  }

  public getStageHasChanged(): EventEmitter {

    return this.stageHasChanged;

  }

  /////////////
  // Setters //
  /////////////
  public setStage(stage: Stage): void {

    this.stage = stage;
    const t = this.stage.getName();
    sessionStorage.setItem('stage', t);
    this.stageHasChanged.emit();
    
  }

  public setStageHasChanged(stageHasChanged: EventEmitter<any>): void {

    this.stageHasChanged = stageHasChanged;

  }

}
