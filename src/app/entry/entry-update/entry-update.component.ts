import { Component, OnInit } from '@angular/core';

// Models
import { Entry } from '../entry.model';

// Services
import { LanguageService } from './../../language/language.service';
import { StageService } from './../../stage/stage.service';
import { TopicService } from './../../topic/topic.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-update',
  templateUrl: './entry-update.component.html',
  styleUrls: ['./entry-update.component.scss']
})
export class EntryUpdateComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private entry: Entry;
  private formerEntry: string;

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private entryService: EntryService

  ) {

    this.formerEntry = this.entryService.getEntry().getNative();
    this.entry = this.entryService.getEntry();

  }

  ngOnInit() {

    this.entryService.entryHasChanged.subscribe( r => {

      this.entry = this.entryService.getEntry();
      
    });

  }
  
  ////////////////////
  // Event Handlers //
  ////////////////////
  public onKey(event: any) { 
  
    this.saveChanges();
  
  }

  ///////////////
  // Functions //
  ///////////////
  public saveChanges(): void {
    console.log(this.formerEntry);
    this.entryService.deleteEntry(

      this.entry.getLanguage(),
      this.entry.getStage(),
      this.entry.getTopic(),
      this.formerEntry

    );
    console.log(this.entry);
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

  public deleteEntry(): void {

    this.entryService.deleteEntry(

      this.entry.getLanguage(),
      this.entry.getStage(),
      this.entry.getTopic(),
      this.entry.getNative()

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
