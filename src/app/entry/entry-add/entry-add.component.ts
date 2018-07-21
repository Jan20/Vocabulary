import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Entry } from './../entry-model/entry'
import { EntryService } from './../entry-service/entry.service'

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.scss']
})
export class EntryAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title = 'Add Entry'
  private native: string
  private foreign: string

  //////////////////
  // FormControls //
  //////////////////
  public nativeFromControl: FormControl = new FormControl()
  public foreignFromControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    private activatedRoute: ActivatedRoute,
    public entryService: EntryService,
  
  ) {}

  ngOnInit() {
 
    this.nativeFromControl.valueChanges.subscribe(native => this.native = native)
    this.foreignFromControl.valueChanges.subscribe(foreign => this.foreign = foreign)
 
  }

  ///////////////
  // Functions //
  ///////////////
  public addEntry(): void {
    
    this.activatedRoute.params.subscribe(params => {
    
      const newEntry = new Entry(this.native, this.foreign, 0)
      this.entryService.addEntry(params['languageId'], params['stageId'], params['topicId'], newEntry)
      this.nativeFromControl.reset()
      this.foreignFromControl.reset()
 
    })
  }

}