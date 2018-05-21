// Angular Modules
import { Injectable, EventEmitter } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Language } from './language.model';

@Injectable()
export class LanguageService {

  ///////////////
  // Variables //
  ///////////////
  private language: Language;
  private onUpdateMode: boolean;
  private onUpdateModeHasChanged: EventEmitter<any>;

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private db: AngularFireDatabase,

  ) {

    this.onUpdateMode = false;
    this.onUpdateModeHasChanged = new EventEmitter();

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

  /////////
  // GET //
  /////////
  public fetchLanguages(): AngularFireList<any> {

    return this.db.list('Vocabulary');

  }

  //////////
  // POST //
  //////////
  public createLanguage(name: string): void {

    this.db.object('Vocabulary' + '/' + name).set({ language: name });

  }

  ////////////
  // UPDATE //
  ////////////
  public updateLanguage(language: string): void {

    this.db.object('Vocabulary' + '/' + language).update({ language: language });

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

  public getOnUpdateModeHasChanged(): EventEmitter<any> {

    return this.onUpdateModeHasChanged;

  }

  /////////////
  // Setters //
  /////////////
  public setLanguage(language: Language): void {

    this.language = language;
    const t = this.language.getName();
    sessionStorage.setItem('language', t);

  }

  public setOnUpdateMode(onUpdateMode: boolean): void {

    this.onUpdateMode = onUpdateMode;

  }

  public setOnUpdateModeHasChanged(onUpdateModeHasChanged: EventEmitter<any>): void {

    this.onUpdateModeHasChanged = onUpdateModeHasChanged;

  }

}
