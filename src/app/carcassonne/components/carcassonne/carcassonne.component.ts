import { Component, OnInit } from '@angular/core';

import { CarcassonneGame } from '../../models/carcassonne.game';

@Component({
  selector: 'st-carcassonne',
  templateUrl: './carcassonne.component.html',
  styleUrls: ['./carcassonne.component.scss']
})
export class CarcassonneComponent implements OnInit {
  game: CarcassonneGame;

  constructor() { }

  ngOnInit(): void {
    this.game = new CarcassonneGame();
  }

}
