import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Topic } from './../topic-model/topic';
import { GenericService } from '../../config/generic-service'
import { User } from '../../user/user-model/user';
import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../../user/user-service/user.service';

@Injectable()
export class TopicService extends GenericService{

  ///////////////
  // Variables //
  ///////////////
  private user: User
  private topic: Topic
  private portfolios: Topic[]

  //////////////
  // Subjects //
  //////////////
  public portfolioSubject: Subject<Topic> = new Subject<Topic>()
  public portfoliosSubject: Subject<Topic[]> = new Subject<Topic[]>()

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
  public async fetchTopic(portfolioId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Topic>(`users/${this.user.userId}/portfolios/${portfolioId}`).valueChanges().subscribe(topic => this.setTopic(topic))

  }

  
  public async fetchTopics(): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Topic>(`users/${this.user.userId}/portfolios`).valueChanges().subscribe(portfolios => this.setTopics(portfolios))

  }


  public async addTopic(language: string, stage: string, topic: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newTopic: any = {language: language, stage: stage, topic: topic}
    const portfolioCollection = this.angularFirestore.collection<Topic>(`/users/${this.user.userId}/languages/${language}/stages/${stage}/topics/${topic}`)
    portfolioCollection.add(newTopic)
    portfolioCollection.ref.where('name', '==', name).get().then( portfolios => portfolios.docs.forEach(topic => portfolioCollection.doc(topic.id).update({ portfolioId: topic.id })))
    this.setInAddMode(false)

  }

  public async updateTopic(portfolioId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)

  }


  /////////////
  // Getters //
  /////////////
  public getTopic(): Topic {

    return this.topic

  }

  public getTopics(): Topic[] {

    return this.portfolios

  }
  
  /////////////
  // Setters //
  /////////////
  public setTopic(topic: Topic): void {

    this.topic  = topic
    this.portfolioSubject.next(topic)

  }
 
  public setTopics(portfolios: Topic[]): void {

    this.portfolios = portfolios
    this.portfoliosSubject.next(portfolios)

  }

}
