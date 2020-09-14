import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMaterialModule } from '../shared/shared-material.module';
import { SharedModule } from '../shared/shared.module';
import { CarcassonneComponent } from './components/carcassonne/carcassonne.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';



@NgModule({
  declarations: [
    ScoreboardComponent,
    CarcassonneComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedModule
  ]
})
export class CarcassonneModule { }
