import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material'
import { MatMenuModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material'
import { MatIconModule } from '@angular/material'
import { MatCardModule } from '@angular/material'
import { MatFormField } from '@angular/material'
import { MatGridListModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatTabsModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material'
import { MatInputModule } from '@angular/material'

@NgModule({
  
  imports: [

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule
    
  ], exports: [
 
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule

  ]
  
})
export class MaterialModule {}