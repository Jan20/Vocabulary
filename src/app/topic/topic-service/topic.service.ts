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
  private topics: Topic[]

  //////////////
  // Subjects //
  //////////////
  public topicSubject: Subject<Topic> = new Subject<Topic>()
  public topicsSubject: Subject<Topic[]> = new Subject<Topic[]>()

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
  public async fetchTopic(languageId: string, stageId: string, topicId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Topic>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}`).valueChanges().subscribe(topic => this.setTopic(topic))

  }

  
  public async fetchTopics(languageId: string, stageId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Topic>(`users/${this.user.userId}/topics`).valueChanges().subscribe(topics => this.setTopics(topics))

  }


  public async addTopic(language: string, stage: string, topic: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newTopic: any = {language: language, stage: stage, topic: topic}
    const portfolioCollection = this.angularFirestore.collection<Topic>(`/users/${this.user.userId}/languages/${language}/stages/${stage}/topics/${topic}`)
    portfolioCollection.add(newTopic)
    portfolioCollection.ref.where('name', '==', name).get().then( topics => topics.docs.forEach(topic => portfolioCollection.doc(topic.id).update({ portfolioId: topic.id })))
    this.setInAddMode(false)

  }

  public async updateTopic(languageId: string, stageId: string, topic: Topic): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topic.getTopicId()}`).update({score: topic.getScore()})

  }

  /////////////
  // Getters //
  /////////////
  public getTopic(): Topic {

    return this.topic

  }

  public getTopics(): Topic[] {

    return this.topics

  }
  
  /////////////
  // Setters //
  /////////////
  public setTopic(topic: Topic): void {

    this.topic = topic
    this.topicSubject.next(topic)

  }
 
  public setTopics(topics: Topic[]): void {

    this.topics = topics
    this.topicsSubject.next(topics)

  }

}
