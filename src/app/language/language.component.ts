import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { LanguageService } from './language.service';

// Model
import { Language } from './language.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private language: Language;
  private languages: Language[];
  private onUpdateMode: boolean;

  constructor(

    private languageService: LanguageService,
    private router: Router

  ) {

    this.languageService.fetchLanguages().valueChanges().subscribe( data => {

      this.languages = [];

      data.forEach( e => {

        if (e.language) {

          const l: Language = new Language(e.language);
          this.languages.push(l);

        }

      });

      this.language = this.languages[0];
    });
  }

  ngOnInit() {

      this.languageService.fetchLanguages().valueChanges().subscribe( data => {

      this.languages = [];

      data.forEach( e => {

        if (e.language) {

          const l: Language = new Language(e.language);
          this.languages.push(l);

        }

      });

      this.language = this.languages[0];

    });


    this.onUpdateMode = this.languageService.getOnUpdateMode();

    this.languageService.getOnUpdateModeHasChanged().subscribe(r => {

      this.onUpdateMode = this.languageService.getOnUpdateMode();

    });

  }

  ///////////////
  // Functions //
  ///////////////
  public updateLanguage(language: Language): void {

    this.languageService.setLanguage(language);
    this.languageService.toggleOnUpdateMode();

  }

  public deleteLanguage(language: Language): void {

    this.languageService.deleteLanguage(language.getName());

  }

  public selectLanguage(language: Language): void {

    this.languageService.setLanguage(language);
    this.router.navigate(['/']);

  }

  /////////////
  // Getters //
  /////////////
  public getLanguage(): Language {

    return this.language;

  }

  public getLanguages(): Language[] {

    return this.languages;

  }

  /////////////
  // Setters //
  /////////////
  public setLanguage(language: Language): void {

    this.language = language;
    this.languageService.setLanguage(language);

  }

  public setLanguages(languages: Language[]): void {

    this.languages = languages;

  }

}
