import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private languageService: LanguageService,
    private router: Router,

  ) {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.languageService.fetchLanguage(this.languageId)
      
    })

    this.languageService.languageSubject.subscribe(language => this.title = language.name)

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.languageService.fetchLanguage(this.languageId)

    })


    this.languageService.languageSubject.subscribe(language => this.title = language.name)

  }

  public update(): void {

    this.router.navigate([`/languages/${this.languageId}/update`])

  }

  public delete(): void {

    this.languageService.delete(this.languageId)
    this.router.navigate([`/languages`])
    
  }


}
