import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../shared/services/generic-service';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Topic } from './../topic-model/topic';

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
    this.angularFirestore.collection<Topic>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics`).valueChanges().subscribe(topics => this.setTopics(topics))

  }


  public async addTopic(language: string, stage: string, name: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newTopic: any = {language: language, stage: stage, name: name}
    const topicCollection = this.angularFirestore.collection<Topic>(`/users/${this.user.userId}/languages/${language}/stages/${stage}/topics`)
    topicCollection.add(newTopic)
    topicCollection.ref.where('name', '==', name).get().then( topics => topics.docs.forEach(topic => topicCollection.doc(topic.id).update({ topicId: topic.id })))
    this.setInAddMode(false)

  }

  public async updateTopic(languageId: string, stageId: string, topic: Topic): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topic.topicId}`).update({score: topic.score})

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

    console.log(topics)
    this.topics = topics
    this.topicsSubject.next(topics)

  }

}
