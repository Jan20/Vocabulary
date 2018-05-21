import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../config/generic-service'
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Language } from './../language-model/language';

@Injectable()
export class LanguageService extends GenericService{

  ///////////////
  // Variables //
  ///////////////
  private user: User
  private language: Language
  private languages: Language[]

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
    this.angularFirestore.doc<Language>(`users/${this.user.userId}/languages/${languageId}`).valueChanges().subscribe(language => this.setLanguage(language))

  }
  
  public async fetchLanguages(): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Language>(`users/${this.user.userId}/languages`).valueChanges().subscribe(languages => this.setLanguages(languages))

  }

  public async addLanguage(language: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newLanguage: any = {name: language}
    const languageCollection = this.angularFirestore.collection<Language>(`/users/${this.user.userId}/languages/${language}`)
    languageCollection.add(newLanguage)
    languageCollection.ref.where('name', '==', name).get().then( languages => languages.docs.forEach(language => languageCollection.doc(language.id).update({ languageId: language.id })))
    this.setInAddMode(false)

  }

  public async updateLanguage(language: string, new_language: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${language}`).update({name: new_language})

  }

  /////////////
  // Getters //
  /////////////
  public getLanguage(): Language {

    return this.language

  }

  public getLanguages(): Language[] {

    return this.languages

  }
  
  /////////////
  // Setters //
  /////////////
  public setLanguage(language: Language): void {

    this.language  = language
    this.languageSubject.next(language)

  }
 
  public setLanguages(languages: Language[]): void {

    this.languages = languages
    this.languagesSubject.next(languages)

  }

}
