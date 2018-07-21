import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { User } from '../../user/user-model/user';
import { UserService } from '../../user/user-service/user.service';
import { Stage } from './../stage-model/stage';

@Injectable()
export class StageService{

  ///////////////
  // Variables //
  ///////////////
  private user: User

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
  
  ) {}

  ///////////////
  // Functions //
  ///////////////
  public async fetchStage(languageId: string, stageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<Stage>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}`).valueChanges().subscribe(stage => this.stageSubject.next(stage))

  }
  
  public async fetchStages(languageId: string): Promise<void> {

    await this.userService.getUser().then( user => this.user = user)
    this.angularFirestore.collection<Stage>(`users/${this.user.userId}/languages/${languageId}/stages`).valueChanges().subscribe(stages => this.stagesSubject.next(stages))

  }

  public async add(languageId: string, name: string): Promise<void> {
    
    await this.userService.getUser().then(user => this.user = user)
    const stageId = name.toLowerCase()
    const stage: any = {stageId: stageId, name: name}
    this.angularFirestore.collection<Stage>(`/users/${this.user.userId}/languages/${languageId}/stages`).doc(stageId).set(stage)

  }

  public async update(languageId: string, stageId: string, name: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    const newStageId = name.toLowerCase()
    const stage: any = {stageId: newStageId, name: name}
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${stageId}`).delete()
    this.angularFirestore.collection<Stage>(`/users/${this.user.userId}/languages/${languageId}/stages`).doc(newStageId).set(stage)

  }

  public async delete(languageId: string, stageId: string): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)
    this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}`).delete()

  }

}
