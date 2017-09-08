import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom Components
import { MenuEntry } from './../model/menu-entry';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public title: String = 'Vocabulary';
  public menuEntries: MenuEntry[] = [];

  constructor(

    private router: Router

  ) {

    this.menuEntries.push(

      new MenuEntry('Overview', 'panorama_fish_eye', '/'),
      new MenuEntry('Login', 'lock_open', '/login')

    );

  }

  public onSelect(menuEntry: MenuEntry) {

    this.router.navigate([menuEntry.getLink()]);

  }

  ngOnInit() {
  }

}
