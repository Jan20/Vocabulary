import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../language-service/language.service'
import { Language } from '../language-model/language';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = ''
  public languageId: string

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.languageService.fetchLanguage(this.languageId)

    })

    this.languageService.languageSubject.subscribe(language => {

      this.title = language.name

    })

  }

}
