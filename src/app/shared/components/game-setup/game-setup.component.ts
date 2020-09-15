import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from '../../models/game';
import { Team } from '../../models/team';

@Component({
  selector: 'st-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent implements OnInit {
  @Input()
  game: Game;

  @Output()
  gameReady = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  addTeam(): void {
    this.game.addTeam();
  }

  removeTeam(team: Team): void {
    this.game.removeTeam(team);
  }
}
