import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../config/generic-service'
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
  private entrys: Entry[]

  //////////////
  // Subjects //
  //////////////
  public entrySubject: Subject<Entry> = new Subject<Entry>()
  public entrysSubject: Subject<Entry[]> = new Subject<Entry[]>()

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
  public async fetchEntry(entryId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Entry>(`users/${this.user.userId}/entrys/${entryId}`).valueChanges().subscribe(entry => this.setEntry(entry))

  }
  
  public async fetchEntrys(): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Entry>(`users/${this.user.userId}/entrys`).valueChanges().subscribe(entrys => this.setEntrys(entrys))

  }

  public async addEntry(entry: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newEntry: any = {name: entry}
    const entryCollection = this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/entrys/${entry}`)
    entryCollection.add(newEntry)
    entryCollection.ref.where('name', '==', name).get().then( entrys => entrys.docs.forEach(entry => entryCollection.doc(entry.id).update({ entryId: entry.id })))
    this.setInAddMode(false)

  }

  public async updateEntry(languageId: string, stageId: string, topicId: string, entryId: string, name: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).update({name: name})

  }

  /////////////
  // Getters //
  /////////////
  public getEntry(): Entry {

    return this.entry

  }

  public getEntrys(): Entry[] {

    return this.entrys

  }
  
  /////////////
  // Setters //
  /////////////
  public setEntry(entry: Entry): void {

    this.entry  = entry
    this.entrySubject.next(entry)

  }
 
  public setEntrys(entrys: Entry[]): void {

    this.entrys = entrys
    this.entrysSubject.next(entrys)

  }
}
