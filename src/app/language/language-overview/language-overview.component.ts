import { Component, OnInit } from '@angular/core';
import { Language } from '../language-model/language'
import { LanguageService } from '../language-service/language.service'
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-language-overview',
  templateUrl: './language-overview.component.html',
  styleUrls: ['./language-overview.component.scss']
})
export class LanguageOverviewComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: String = 'Languages'
  public languages: Language[] = []

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    public languageService: LanguageService,
    private router: Router,

  ) { }

  ngOnInit() {

    this.languageService.fetchLanguages()
    this.languageService.languagesSubject.subscribe(languages => {

      this.languages = languages
      
    })

  }

  ///////////////
  // Functions //
  ///////////////
  public switchToAdd(): void {

    this.router.navigate([`languages/add`])

  }

  public switchToLanguage(languageId: string): void {

    this.router.navigate([`languages/${languageId}`])

  }


}
