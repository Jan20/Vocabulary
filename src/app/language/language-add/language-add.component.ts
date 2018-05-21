import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Language } from './../language-model/language'
import { LanguageService } from './../language-service/language.service'

@Component({
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.scss']
})
export class LanguageAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string
  public title = 'Add Language'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public languageService: LanguageService,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addStage(): void {

    this.activatedRoute.params.subscribe(params => this.languageService.addLanguage(this.name))
    this.nameFormControl.reset()

  }

}
