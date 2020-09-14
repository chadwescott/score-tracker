import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from '../../models/game';

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

  playerOptions: number[];
  teamOptions: number[];

  constructor() { }

  ngOnInit(): void {
    this.teamOptions = [];
    for (let i = this.game.minTeams; i <= this.game.maxTeams; i++) {
      this.teamOptions.push(i);
    }

    this.playerOptions = [];
    for (let i = this.game.minPlayersPerTeam; i <= this.game.maxPlayersPerTeam; i++) {
      this.playerOptions.push(i);
    }
  }
}
