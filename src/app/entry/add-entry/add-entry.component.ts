import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private native: string;
  private foreign: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    public languageService: LanguageService,
    public stageService: StageService,
    public topicService: TopicService,
    public entryService: EntryService

  ) { }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.entryService.createEntry(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName(),
      this.topicService.getTopic().getName(),
      this.native,
      this.foreign,
      0

    );

    this.native = '';
    this.foreign = '';

  }

  ngOnInit() { }

}
