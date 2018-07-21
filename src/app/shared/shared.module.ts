import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesModule } from 'angular-particle';
import { ParticlesComponent} from './components/particles/particles.component';

@NgModule({
  imports: [

    CommonModule,
    ParticlesModule

  ],
  declarations: [

    ParticlesComponent

  ],
  exports: [

    ParticlesComponent,
    ParticlesModule

  ]
})
export class SharedModule { }
