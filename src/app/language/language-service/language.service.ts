import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../shared/services/generic-service';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Language } from './../language-model/language';

@Injectable()
export class LanguageService extends GenericService{

  ///////////////
  // Variables //
  ///////////////
  private user: User

  //////////////
  // Subjects //
  //////////////
  public languageSubject: Subject<Language> = new Subject<Language>()
  public languagesSubject: Subject<Language[]> = new Subject<Language[]>()

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
  public async fetchLanguage(languageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Language>(`users/${this.user.userId}/languages/${languageId}`).valueChanges().subscribe(language => this.languageSubject.next(language))

  }
  
  public async fetchLanguages(): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Language>(`users/${this.user.userId}/languages`).valueChanges().subscribe(languages => this.languagesSubject.next(languages))

  }

  public async add(name: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    const languageId = name.toLowerCase()
    const language: any = {languageId: languageId, name: name}
    this.angularFirestore.collection<Language>(`/users/${this.user.userId}/languages`).doc(languageId).set(language)

  }

  public async update(languageId: string, name: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    const newLanguageId = name.toLowerCase()
    const language: any = {languageId: newLanguageId, name: name}
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}`).delete()
    this.angularFirestore.collection<Language>(`/users/${this.user.userId}/languages`).doc(newLanguageId).set(language)

  }

  public async delete(languageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}`).delete()

  }
}
