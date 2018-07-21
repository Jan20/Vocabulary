import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { GenericService } from '../../shared/services/generic-service';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Topic } from './../topic-model/topic';

@Injectable()
export class TopicService {

  ///////////////
  // Variables //
  ///////////////
  private user: User


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
  
  ) {}

  ///////////////
  // Functions //
  ///////////////
  public async fetchTopic(languageId: string, stageId: string, topicId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Topic>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}`).valueChanges().subscribe(topic => this.topicSubject.next(topic))

  }

  
  public async fetchTopics(languageId: string, stageId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Topic>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics`).valueChanges().subscribe(topics => this.topicsSubject.next(topics))

  }

  public async add(languageId: string, stageId: string, name: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const topicId = name.toLowerCase()
    const topic: any = {topicId: topicId, name: name}
    this.angularFirestore.collection<Topic>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics`).doc(topicId).set(topic)

  }

  public async update(languageId: string, stageId: string, topicId: string, name: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    const newTopicId = name.toLowerCase()
    const topic: any = {topicId: newTopicId, name: name}
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${stageId}/topics/${topicId}`).delete()
    this.angularFirestore.collection<Topic>(`/users/${this.user.userId}/languages/${languageId}/stages`).doc(newTopicId).set(topic)

  }

  public async delete(languageId: string, stageId: string, topicId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}`).delete()

  }


}
