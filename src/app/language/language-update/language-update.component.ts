import { Component, OnInit } from '@angular/core';

// Model
import { Language } from './../language-model/language';

// Services
import { LanguageService } from './../language-service/language.service';

@Component({
  selector: 'app-language-update',
  templateUrl: './language-update.component.html',
  styleUrls: ['./language-update.component.scss']
})
export class LanguageUpdateComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private language: Language;
  
  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private languageService: LanguageService,

  ) {

    this.language = this.languageService.getLanguage();
    
  }

  ngOnInit() {

  }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.languageService.updateLanguage(

      this.language.getName()

    );

    this.languageService.toggleOnUpdateMode();

  }

  /////////////
  // Getters //
  /////////////
  public getLanguage(): Language {

    return this.language;

  }

  /////////////
  // Setters //
  /////////////
  public setLanguage(language: Language): void {

    this.language = language;

  }

}
