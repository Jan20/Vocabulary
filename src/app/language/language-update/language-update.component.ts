import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { LanguageService } from './../language-service/language.service'

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
  public title: string = 'Edit Language'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService,
    private router: Router,

  ) {}

  ngOnInit() {

    this.nameFormControl.valueChanges.subscribe(name => this.name = name)

  }

  ///////////////
  // Functions //
  ///////////////
  public update(): void {

    this.activatedRoute.params.subscribe(params => {
      
      this.languageService.update(params['languageId'], name)
      this.router.navigate([`/languages/${this.name.toLowerCase()}`])
      this.nameFormControl.reset()

    })

  }

  public close(): void {

    this.activatedRoute.params.subscribe(params => {

      this.router.navigate([`/languages/${params['languageId']}`])
      this.nameFormControl.reset()

    })

  }
}
