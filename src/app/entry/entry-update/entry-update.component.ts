import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from './../entry-model/entry';
import { EntryService } from './../entry-service/entry.service';

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
    private router: Router,

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
  public update(): void {
    
    this.activatedRoute.params.subscribe(params => {
    
      const updatedEntry = new Entry(this.native, this.foreign, 0)
      this.entryService.update(params['languageId'], params['stageId'], params['topicId'], updatedEntry)
      this.nativeFromControl.reset()
      this.foreignFromControl.reset()

    })
  }

  public close(): void {

    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}`])

  }

  public delete(): void {

    this.entryService.delete(this.languageId, this.stageId, this.topicId, this.entryId)
    this.router.navigate([`/languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}`])

  }
}
