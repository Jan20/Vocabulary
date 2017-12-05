import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from './../language/language.service';
import { StageService } from './../stage/stage.service';
import { TopicService } from './../topic/topic.service';
import { EntryService } from './entry.service';

// Model
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private language: string;
  private stage: string;
  private topic: string;
  private topicScore: number;
  private entry: Entry;
  private entries: Entry[];
  private answer: string;
  private pointer: number;
  private onUpdateMode: boolean;
  private answerIsCorrect: boolean;

  /////////////////
  // Constructor //
  /////////////////
  constructor(

    private languageService: LanguageService,
    private stageService: StageService,
    private topicService: TopicService,
    private entryService: EntryService

  ) {

    this.language = this.languageService.getLanguage().getName();    
    this.stage = this.stageService.getStage().getName();
    this.topic = this.topicService.getTopic().getName();
    this.entry = new Entry('', '', '', '', '', 0);
    this.topicScore = 0;
    this.answerIsCorrect = true;
    this.pointer = 0;
    this.onUpdateMode = this.entryService.getOnUpdateMode();

    this.entryService.fetchEntries(this.language, this.stage, this.topic).valueChanges().subscribe( r => {

      this.entries = []; 
      this.topicScore = 0;
      
      r.forEach( e => {

        if (e.native) {

          this.entries.push(new Entry(this.language, this.stage, this.topic, e.native, e.foreign, e.score));
          this.topicScore = this.topicScore + e.score;

        }

      });

      if (this.entries[this.pointer]) {

        this.entry = this.entries[this.pointer];
        
      }


    });

  }

  ///////////////////////
  // On Initialization //
  ///////////////////////
  ngOnInit() {

    this.entryService.onUpdateModeHasChanged.subscribe (r => {

      this.onUpdateMode = this.entryService.getOnUpdateMode();

    });

    this.entryService.entryHasChanged.subscribe( r => {

      this.entry = this.entryService.getEntry();

      for (let i = 0; i < this.entries.length; i++) {

        if (this.entry.getNative() === this.entries[i].getNative()) {

          this.pointer = i;

        }

      }

    });
    
  }

  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 
  
    this.check();
  
  }

  ///////////////
  // Functions //
  ///////////////
  public check() {

    if (this.answer === this.entry.getForeign()) {

      this.answerIsCorrect = true;
      this.answer = '';

      if (this.entry.getScore() < 5) {

        this.entryService.updateEntry(

          this.entry.getLanguage(),
          this.entry.getStage(),
          this.entry.getTopic(),
          this.entry.getNative(),
          this.entry.getForeign(),
          this.entry.getScore() + 1

        );
        
        this.topicScore = this.topicScore + 1;
        const topicScoreNormalized = (this.topicScore / this.entries.length);
        this.topicService.updateTopic(this.language, this.stage, this.topic, topicScoreNormalized);

      }

      if (this.pointer < this.entries.length - 1) {

        this.pointer = this.pointer + 1;

      } else {

        this.pointer = 0;

      }

      if (this.entries[this.pointer]) {

        this.entry = this.entries[this.pointer];

      }

    } else {

      this.answerIsCorrect = false;
      this.answer = '';

      this.topicScore = this.topicScore - this.entry.getScore();
      const topicScoreNormalized = (this.topicScore / this.entries.length);
      this.topicService.updateTopic(this.language, this.stage, this.topic, topicScoreNormalized);

      this.entryService.updateEntry(

        this.entry.getLanguage(),
        this.entry.getStage(),
        this.entry.getTopic(),
        this.entry.getNative(),
        this.entry.getForeign(),
        0

      );

    }

  }

  public toggleUpdateMode(): void {

    this.entryService.toggleOnUpdateMode();

  }

  /////////////
  // Getters //
  /////////////
  public getEntry(): Entry {

    return this.entry;

  }

  public getEntries(): Entry[] {

    return this.entries;

  }

  public getOnUpdateMode(): boolean {

    return this.onUpdateMode;

  }

  public getAnswerIsCorrect(): boolean {

    return this.answerIsCorrect;

  }

  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry = entry;

  }

  public setEntries(entries: Entry[]): void {

    this.entries = entries;

  }

  public setOnUpdateMode(onUpdateMode: boolean): void {

    this.onUpdateMode = onUpdateMode;

  }

  public setAnswerIsCorrect(answerIsCorrect: boolean): void {

    this.answerIsCorrect = answerIsCorrect;

  }

}
