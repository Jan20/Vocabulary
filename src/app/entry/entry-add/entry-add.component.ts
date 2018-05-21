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
  private name: string
  public title = 'Add Language'
  public nameFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
  
    public activatedRoute: ActivatedRoute,
    public entryService: EntryService,

  ) {}

  ngOnInit() {
  
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
  
  }

  ///////////////
  // Functions //
  ///////////////
  public addStage(): void {

    this.activatedRoute.params.subscribe(params => this.entryService.addEntry(this.name))
    this.nameFormControl.reset()

  }

}
