import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'
import { EntryService } from './../entry-service/entry.service'
import { Entry } from './../entry-model/entry'

@Component({
  selector: 'app-entry-update',
  templateUrl: './entry-update.component.html',
  styleUrls: ['./entry-update.component.scss']
})
export class EntryUpdateComponent implements OnInit {


  ///////////////
  // Variables //
  ///////////////
  public title = 'Update Entry'
  private native: string
  private foreign: string
  private languageId: string
  private stageId: string
  private topicId: string
  private entryId: string
  private entry: Entry

  //////////////////
  // FormControls //
  //////////////////
  public nativeFromControl: FormControl = new FormControl()
  public foreignFromControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private entryService: EntryService,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit() {
    this.nativeFromControl.valueChanges.subscribe(native => this.native = native)
    this.foreignFromControl.valueChanges.subscribe(foreign => this.foreign = foreign)

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']
      this.entryId = params['entryId']
      this.entryService.fetchEntry(this.languageId, this.stageId, this.topicId, this.entryId)

    })
  
  }

  ///////////////
  // Functions //
  ///////////////
  public updateEntry(): void {
    
    this.activatedRoute.params.subscribe(params => {
    
      const updatedEntry = new Entry(this.native, this.foreign, 0)
      this.entryService.updateEntry(params['languageId'], params['stageId'], params['topicId'], updatedEntry)
      this.nativeFromControl.reset()
      this.foreignFromControl.reset()

    })
  }
}
