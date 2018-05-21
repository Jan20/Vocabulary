import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.scss']
})
export class EntryAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private language: string;
  private stage: string;
  private topic: string;
  private native: string;
  private foreign: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.language = this.languageService.getLanguage().getName();
    this.stage = this.stageService.getStage().getName();
    this.topic = this.topicService.getTopic().getName();

   }
  
  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 
    
    this.save();

  }
  
  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    if (this.native != '' && this.foreign != '') {

      this.entryService.createEntry(this.language, this.stage, this.topic, this.native, this.foreign, 0);      

    }

    this.native = '';
    this.foreign = '';

  }

  ngOnInit() { }

  /////////////
  // Getters //
  /////////////
  public getNative(): string {

    return this.native;

  }

  public getForeign(): string {

    return this.foreign;

  }

  /////////////
  // Setters //
  /////////////
  public setNative(native: string): void {
  
    this.native = native;

  }

  public setForeign(foreign: string): void {

    this.foreign = foreign;

  }

}
