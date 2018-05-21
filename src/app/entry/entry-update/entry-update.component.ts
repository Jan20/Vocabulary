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
  private name: string
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private activatedRoute: ActivatedRoute,
    private entryService: EntryService,

  ) {}

  ngOnInit() {

    this.nameFormControl.valueChanges.subscribe(name => this.name = name)

  }

  ///////////////
  // Functions //
  ///////////////
  public updateEntry(): void {

    this.activatedRoute.params.subscribe(params => {

      this.entryService.updateEntry(params['languageId'], params['stageId'], params['topicId'], params['entryId'], name)
      this.nameFormControl.reset()

    })

  }
}
