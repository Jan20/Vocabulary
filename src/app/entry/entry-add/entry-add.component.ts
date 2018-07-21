import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
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
  private languageId: string
  private stageId: string
  private topicId: string
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
    private entryService: EntryService,
    private router: Router,
    
  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.languageId = params['languageId']
      this.stageId = params['stageId']
      this.topicId = params['topicId']

    })
 
    this.nativeFromControl.valueChanges.subscribe(native => this.native = native)
    this.foreignFromControl.valueChanges.subscribe(foreign => this.foreign = foreign)
 
  }

  ///////////////
  // Functions //
  ///////////////
  public add(): void {

    this.activatedRoute.params.subscribe(params => {

      const newEntry = new Entry(this.native, this.foreign, 0)
      this.entryService.add(params['languageId'], params['stageId'], params['topicId'], newEntry)
      this.nativeFromControl.reset()
      this.foreignFromControl.reset()
      this.router.navigate([`languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}`])

    })

  }

  public close(): void {

    this.router.navigate([`languages/${this.languageId}/stages/${this.stageId}/topics/${this.topicId}`])

  }
}