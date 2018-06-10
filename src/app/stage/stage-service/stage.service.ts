import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Stage } from './../stage-model/stage';
import { GenericService } from '../../config/generic-service'
import { User } from '../../user/user-model/user';
import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../../user/user-service/user.service';

@Injectable()
export class StageService extends GenericService{

  ///////////////
  // Variables //
  ///////////////
  private user: User
  private stage: Stage
  private stages: Stage[]

  //////////////
  // Subjects //
  //////////////
  public stageSubject: Subject<Stage> = new Subject<Stage>()
  public stagesSubject: Subject<Stage[]> = new Subject<Stage[]>()

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
  public async fetchStage(languageId: string, stageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Stage>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}`).valueChanges().subscribe(stage => this.setStage(stage))

  }
  
  public async fetchStages(languageId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Stage>(`users/${this.user.userId}/languages/${languageId}/stages`).valueChanges().subscribe(stages => this.setStages(stages))

  }

  public async addStage(languageId: string, name: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const newStage: any = {name: name}
    const stageCollection = this.angularFirestore.collection<Stage>(`/users/${this.user.userId}/languages/${languageId}/stages`)
    stageCollection.add(newStage)
    stageCollection.ref.where('name', '==', name).get().then( stages => stages.docs.forEach(stage => stageCollection.doc(stage.id).update({ stageId: stage.id })))
    this.setInAddMode(false)

  }

  public async updateStage(stageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)

  }

  /////////////
  // Getters //
  /////////////
  public getStage(): Stage {

    return this.stage

  }

  public getStages(): Stage[] {

    return this.stages

  }
  
  /////////////
  // Setters //
  /////////////
  public setStage(stage: Stage): void {

    this.stage  = stage
    this.stageSubject.next(stage)

  }
 
  public setStages(stages: Stage[]): void {

    this.stages = stages
    this.stagesSubject.next(stages)

  }

}
