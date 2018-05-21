import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'
import { LanguageService } from './../language-service/language.service'
import { Language } from './../language-model/language'

@Component({
  selector: 'app-language-update',
  templateUrl: './language-update.component.html',
  styleUrls: ['./language-update.component.scss']
})
export class LanguageUpdateComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService,

  ) {}

  ngOnInit() {

    this.nameFormControl.valueChanges.subscribe(name => this.name = name)

  }

  ///////////////
  // Functions //
  ///////////////
  public updateLanguage(): void {

    this.activatedRoute.params.subscribe(params => {

      this.languageService.updateLanguage(params['languageId'], name)
      this.nameFormControl.reset()

    })

  }
}
