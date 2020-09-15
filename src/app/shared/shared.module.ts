import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { SharedMaterialModule } from './shared-material.module';



@NgModule({
  declarations: [
    GameSetupComponent,
    PlayerFormComponent,
    TeamFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    GameSetupComponent
  ]
})
export class SharedModule { }
