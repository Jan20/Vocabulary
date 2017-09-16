import { Component, OnInit } from '@angular/core';

// Models
import { Entry } from '../entry.model';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.scss']
})
export class UpdateEntryComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private entry: Entry;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.entry = this.entryService.getEntry();

  }

  ngOnInit() {

  }

  ///////////////
  // Functions //
  ///////////////
  public save(): void {

    this.entryService.createEntry(

      this.entry.getLanguage(),
      this.entry.getStage(),
      this.entry.getTopic(),
      this.entry.getNative(),
      this.entry.getForeign(),
      0

    );

    this.entryService.toggleOnUpdateMode();

  }

  /////////////
  // Getters //
  /////////////
  public getEntry(): Entry {

    return this.entry;

  }

  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry = entry;

  }

}
