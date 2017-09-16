// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Model
import { Language } from './language.model';

@Injectable()
export class LanguageService {

  ///////////////
  // Variables //
  ///////////////
  private language: Language;
  public languageHasChanged: EventEmitter<any> = new EventEmitter();
  private onUpdateMode: boolean;
  public onUpdateModeHasChanged: EventEmitter<any> = new EventEmitter();

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,

  ) {

    this.onUpdateMode = false;

    this.fetchLanguages().subscribe( res => {

      const t: Language[] = [];

      res.forEach( e => {

        if (e.language) {

          t.push(new Language(e.language));

        }

      });

      this.language = t[0];

    });

  }

  ///////////////
  // Functions //
  ///////////////
  public toggleOnUpdateMode(): void {

    if (this.onUpdateMode === true) {

      this.onUpdateMode = false;
      this.onUpdateModeHasChanged.emit(this.onUpdateMode);

    } else {

      this.onUpdateMode = true;
      this.onUpdateModeHasChanged.emit(this.onUpdateMode);

    }

  }

  /////////////////////////
  // Database Connection //
  /////////////////////////

  /////////
  // GET //
  /////////
  public fetchLanguages(): FirebaseListObservable<any> {

    return this.db.list('Vocabulary');

  }

  //////////
  // POST //
  //////////
  public createLanguage(name: string): void {

    this.db.object('Vocabulary' + '/' + name).set({

      language: name

    });

  }

  ////////////
  // UPDATE //
  ////////////
  public updateLanguage(language: string): void {

    this.db.object('Vocabulary' + '/' + language).update({

      language: language

    });

  }

  ////////////
  // Delete //
  ////////////
  public deleteLanguage(language: string): void {

    this.db.object('Vocabulary' + '/' + language).remove();

  }

  /////////////
  // Getters //
  /////////////
  public getLanguage(): Language {

    if (this.language) {

      return this.language;

    } else {

      return new Language(sessionStorage.getItem('language'));

    }

  }

  public getOnUpdateMode(): boolean {

    return this.onUpdateMode;

  }

  /////////////
  // Setters //
  /////////////
  public setLanguage(language: Language): void {

    this.language = language;
    const t = this.language.getName();
    sessionStorage.setItem('language', t);
    this.languageHasChanged.emit(this.language);


  }

  public setOnUpdateMode(onUpdateMode: boolean): void {

    this.onUpdateMode = onUpdateMode;

  }

}
