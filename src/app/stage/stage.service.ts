// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Model
import { Stage } from './stage.model';

// Services
import { LanguageService } from './../language/language.service';

@Injectable()
export class StageService {

  ///////////////
  // Variables //
  ///////////////
  private stage: Stage;
  public stageHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,
    private languageService: LanguageService,

  ) {

    this.fetchStages(this.languageService.getLanguage().getName()).subscribe( res => {

      const t: Stage[] = [];

      res.forEach( e => {

        if (e.language) {

          t.push(new Stage(e.language, e.name));

        }

      });

      this.stage = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////

  /////////////////////////
  // Database Connection //
  /////////////////////////

  /////////
  // GET //
  /////////
  public fetchStages(language: string): FirebaseListObservable<any> {

    return this.db.list('Vocabulary' + '/' + language);

  }

  //////////
  // POST //
  //////////
  public createStage(language: string, name: string): void {

    this.db.object('Vocabulary' + '/' + language + '/' + name).set({

      stage: name

    });

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

      return new Stage(

        this.languageService.getLanguage().getName(),
        sessionStorage.getItem('stage')

      );

    }

  }

  /////////////
  // Setters //
  /////////////
  public setStage(stage: Stage): void {

    this.stage = stage;
    const t = this.stage.getName();
    sessionStorage.setItem('stage', t);
    this.stageHasChanged.emit(this.stage);

  }

}
