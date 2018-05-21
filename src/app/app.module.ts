// Angular Components
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MaterialModule } from './config/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Components
import { AppComponent } from './app.component'

// Modules
import { ConfigModule } from './config/config.module'
import { MenuModule } from './menu/menu.module'
import { UserModule } from './user/user.module'
import { LanguageModule } from './language/language.module'
import { StageModule } from './stage/stage.module'
import { TopicModule } from './topic/topic.module'
import { EntryModule } from './entry/entry.module'

// Directives
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  
  declarations: [
    
    AppComponent,
  
  ], imports: [
    
    MaterialModule,
    BrowserModule,
    // NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2GoogleChartsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfigModule,
    UserModule,
    MenuModule,
    LanguageModule,
    // StageModule,
    // TopicModule,
    // EntryModule

  ], providers: [
    
    {provide: APP_BASE_HREF, useValue : '/' }
  
  ], bootstrap: [
  
    AppComponent
  
  ]
})
export class AppModule { }
