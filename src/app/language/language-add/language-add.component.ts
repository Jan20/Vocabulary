import { Component, OnInit } from '@angular/core';

// Model
import { Language } from './../language-model/language';

// Services
import { LanguageService } from './../language-service/language.service';

@Component({
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.scss']
})
export class LanguageAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private name: string;
  private onAddMode: boolean;

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    private languageService: LanguageService,

  ) {

    this.onAddMode = false;

  }

  ngOnInit() {

    // this.languageService.languageHasChanged.subscribe(

    //   (res) => {

    //     this.language = this.languageService.getLanguage();

    //   }

    // );

  }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.languageService.createLanguage(this.name);
    this.toggleMode();
    this.name = '';

  }

  public toggleMode(): void {

    if (this.onAddMode === false) {

      this.onAddMode = true;

    } else {

      this.onAddMode = false;

    }

  }

  /////////////
  // Getters //
  /////////////
  public getName(): string {

    return this.name;

  }

  public getAnAddMode(): boolean {

    return this.onAddMode;

  }
  /////////////
  // Setters //
  /////////////
  public setName(name: string): void {

    this.name = name;

  }

  public setOnAddMode(onAddMode: boolean): void {

    this.onAddMode = onAddMode;

  }

}
