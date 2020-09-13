import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarcassonneComponent } from './components/carcassonne/carcassonne.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';



@NgModule({
  declarations: [
    ScoreboardComponent,
    CarcassonneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarcassonneModule { }
