import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom Components
import { MenuItem } from './menu-item.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public title: String = 'Vocabulary';
  public menuItems: MenuItem[];

  constructor(

    private router: Router

  ) {

    this.menuItems = [];

    this.menuItems.push(

      new MenuItem('Overview', 'panorama_fish_eye', '/'),
      new MenuItem('Language', 'language', '/language'),
      new MenuItem('Login', 'lock_open', '/login')

    );

  }

  public onSelect(menuItem: MenuItem) {

    this.router.navigate([menuItem.getLink()]);

  }

  ngOnInit() {
  }

}
