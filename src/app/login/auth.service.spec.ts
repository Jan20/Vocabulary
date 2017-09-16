// Angular Components
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

// Angular Material
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

// Routing Modules
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './../config/routing.config';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from './../config/firebase.config';

// NG Chart
import {GoogleChart} from './../directives/angular2-google-chart.directive';

// Services
import { FilterService } from './../services/filter.service';
import { MarketService } from './../market/market.service';
import { ConfigService } from './../config/config.service';
import { PortfolioService } from './../portfolio/portfolio.service';
import { AuthService } from './../login/auth.service';
import { VantageService } from './../services/vantage.service';
import { SeedService } from './../services/seed.service';
import { StockService } from './../stock/stock.service';
import { MathService } from './../services/math.service';

// Custom Components
import { AppComponent } from './../app.component';
import { MenuComponent } from './../menu/menu.component';
import { MarketComponent} from './../market/market.component';
import { StockComponent } from './../stock/stock.component';
import { PortfolioComponent } from './../portfolio/portfolio.component';
import { LoginComponent } from './../login/login.component';
import { PositionComponent } from './../portfolio/position/position.component';
import { StrategyComponent } from './../strategy/strategy.component';
import { inject } from '@angular/core/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        MarketComponent,
        GoogleChart,
        PortfolioComponent,
        StockComponent,
        LoginComponent,
        PositionComponent,
        StrategyComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          ROUTES,
          { enableTracing: true }
        ),
        AngularFireModule.initializeApp(FirebaseConfig),
      ],
      providers: [
        FilterService,
        MarketService,
        ConfigService,
        PortfolioService,
        AngularFireAuth,
        AuthService,
        VantageService,
        AngularFireDatabase,
        SeedService,
        StockService,
        MathService
      ]
    });
});

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

