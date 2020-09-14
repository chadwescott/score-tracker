import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../models/game';

@Component({
  selector: 'st-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  @Input()
  game: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
