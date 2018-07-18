import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../shared/services/generic-service';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Entry } from './../entry-model/entry';

@Injectable()
export class EntryService extends GenericService {

  ///////////////
  // Variables //
  ///////////////
  private user: User
  private entry: Entry
  private entries: Entry[]

  //////////////
  // Subjects //
  //////////////
  public entrySubject: Subject<Entry> = new Subject<Entry>()
  public entriesSubject: Subject<Entry[]> = new Subject<Entry[]>()
  public selectSubject: Subject<boolean> = new Subject<boolean>()

  //////////////////
  // Constructors //
  //////////////////
  constructor(
  
    private angularFirestore: AngularFirestore,
    private userService: UserService,
  
  ) { 
    
    super() 
  
  }

  ///////////////
  // Functions //
  ///////////////
  public async fetchEntry(languageId: string, stageId: string, topicId: string, entryId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).valueChanges().subscribe(entry => this.setEntry(entry))

  }
  
  public async fetchEntries(languageId: string, stageId: string, topicId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`).valueChanges().subscribe(entries => this.setEntrys(entries))

  }

  public async addEntry(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newEntry: any = {native: entry.native, foreign: entry.foreign, score: entry.score}
    const entryCollection = this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`)
    entryCollection.add(newEntry)
    entryCollection.ref.where('native', '==', entry.native).get().then( entries => entries.docs.forEach(entry => entryCollection.doc(entry.id).update({ entryId: entry.id })))
    this.setInAddMode(false)

  }

  public async updateEntry(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entry.entryId}`).update({score: entry.score})

  }

  /////////////
  // Getters //
  /////////////
  public getEntry(): Entry {

    return this.entry

  }

  public getEntries(): Entry[] {

    return this.entries

  }
  
  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry  = entry
    this.entrySubject.next(entry)

  }
 
  public setEntrys(entries: Entry[]): void {

    this.entries = entries
    this.entriesSubject.next(entries)

  }
}
