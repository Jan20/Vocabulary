import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-overview',
  templateUrl: './landing-overview.component.html',
  styleUrls: ['./landing-overview.component.scss']
})
export class LandingOverviewComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = 'Vocabulary'
  public subtitle: string = 'A simple and straightforward application to train your vocabulary'

  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

  public switchView(): void {

    this.router.navigate(['languages'])

  }

}
