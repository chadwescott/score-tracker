import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from '../../models/game';
import { Player } from '../../models/player';
import { Team } from '../../models/team';

@Component({
  selector: 'st-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  @Input()
  game: Game;

  @Input()
  team: Team;

  @Input()
  teamNumber: number;

  @Output()
  removeTeam = new EventEmitter<Team>();

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.team.players.push(new Player());
  }

  removePlayer(player: Player): void {
    const index = this.team.players.indexOf(player);
    if (index > -1) {
      this.team.players.splice(index, 1);
    }
  }
}
