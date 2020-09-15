import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../../models/player';

@Component({
  selector: 'st-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  @Input()
  player: Player;
  constructor() { }

  ngOnInit(): void {
  }

}
