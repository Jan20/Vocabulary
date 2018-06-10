import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu-service/menu.service';
import { MenuItem } from '../menu-model/menu.item';
import { LanguageService } from '../../language/language-service/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: String = 'Vocabulary'
  public items: MenuItem[]

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private languageService: LanguageService,
    private router: Router,
    public menuService: MenuService,

  ) {}

  ngOnInit() {

    this.languageService.fetchLanguages()
    this.languageService.languagesSubject.subscribe(languages => {

      this.items = []

      languages.forEach(language => {

        this.items.push(new MenuItem(language.name, 'grain', '/languages/' + language.languageId))

      })
    })
  }

  ///////////////
  // Functions //
  ///////////////
  public navigateToMenuEntry(item: MenuItem): void {

    this.router.navigate([item.getLink()])

  }

  public addLanguage(): void {

    this.router.navigate(['/languages/add'])

  }

  public switchToLandingPage(): void {

    this.router.navigate([''])

  }

}
