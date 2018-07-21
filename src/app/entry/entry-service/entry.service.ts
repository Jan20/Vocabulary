import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../shared/services/generic-service';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Entry } from './../entry-model/entry';

@Injectable()
export class EntryService {

  ///////////////
  // Variables //
  ///////////////
  private user: User

  //////////////
  // Subjects //
  //////////////
  public entrySubject: Subject<Entry> = new Subject<Entry>()
  public entriesSubject: Subject<Entry[]> = new Subject<Entry[]>()
  public selectSubject: Subject<Entry> = new Subject<Entry>()

  //////////////////
  // Constructors //
  //////////////////
  constructor(
  
    private angularFirestore: AngularFirestore,
    private userService: UserService,
  
  ) {}

  ///////////////
  // Functions //
  ///////////////
  public async fetchEntry(languageId: string, stageId: string, topicId: string, entryId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).valueChanges().subscribe(entry => this.entrySubject.next(entry))

  }
  
  public async fetchEntries(languageId: string, stageId: string, topicId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`).valueChanges().subscribe(entries => this.entriesSubject.next(entries))

  }

  public async add(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const entryId = entry.native.toLowerCase()
    const newEntry: any = {entryId: entryId, native: entry.native, foreign: entry.foreign, score: 0}
    this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`).doc(entryId).set(newEntry)

  }

  public async update(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entry.entryId}`).delete()
    const entryId = entry.native.toLowerCase()
    const newEntry: any = {entryId: entryId, native: entry.native, foreign: entry.foreign, score: entry.score}
    this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`).doc(entryId).set(newEntry)

  }

  public async changeScore(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {

    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entry.entryId}`).update({score:entry.score})

  } 

  public async delete(languageId: string, stageId: string, topicId: string, entryId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).delete()

  }
  
}
