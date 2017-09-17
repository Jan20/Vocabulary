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

  private entry: Entry;
  private entries: Entry[];
  private answer: string;
  private pointer: number;
  private onUpdateMode: boolean;
  private answerIsCorrect: boolean;

  constructor(

    public languageService: LanguageService,
    public stageService: StageService,
    public topicService: TopicService,
    public entryService: EntryService

  ) {

    this.entry = new Entry('', '', '', '', '', 0);
    this.entries = [];
    this.entries.push(this.entry);
    console.log(this.entries);

    this.answerIsCorrect = true;
    this.pointer = 0;

    this.entryService.fetchEntries(

      this.languageService.getLanguage().getName(),
      this.stageService.getStage().getName(),
      this.topicService.getTopic().getName()

    ).subscribe( res => {

      this.entries = [];

      res.forEach( e => {

        if (e.native) {

          const t = new Entry(

            this.languageService.getLanguage().getName(),
            this.stageService.getStage().getName(),
            this.topicService.getTopic().getName(),
            e.native,
            e.foreign,
            e.score

          );

          this.entries.push(t);

        }

      });

      if (this.entries[0]) {

        this.entry = this.entries[0];

      }

    });

  }

  ngOnInit() {

    this.onUpdateMode = this.entryService.getOnUpdateMode();

    this.entryService.onUpdateModeHasChanged.subscribe (res => {

      this.onUpdateMode = this.entryService.getOnUpdateMode();

    });

    this.entryService.entryHasChanged.subscribe( data => {

      this.entry = this.entryService.getEntry();
      console.log('Tolllll');
      console.log(this.entry);
      for (let i = 0; i < this.entries.length; i++) {

        if (this.entry.getNative() === this.entries[i].getNative()) {

          this.pointer = i;

        }

      }

    });

  }

  ///////////////
  // Functions //
  ///////////////
  public check() {

    if (this.answer === this.entry.getForeign()) {

      this.answerIsCorrect = true;
      this.answer = '';

      if ( this.entry.getScore() < 5) {

        this.entryService.updateEntry(

          this.entry.getLanguage(),
          this.entry.getStage(),
          this.entry.getTopic(),
          this.entry.getNative(),
          this.entry.getForeign(),
          this.entry.getScore() + 1

        );

      }

      if ( this.pointer < this.entries.length - 1) {

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

  public deleteEntry(): void {

    this.entryService.deleteEntry(

      this.entry.getLanguage(),
      this.entry.getStage(),
      this.entry.getTopic(),
      this.entry.getNative()

    );

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
