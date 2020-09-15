import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private readonly teamsKey = 'TEAMS';
  private readonly playersKey = 'PLAYERS';
  private readonly gamesKey = 'GAMES';

  players: Player[] = [];
  teams: Team[] = [];
  games: Game[] = [];

  constructor() {
    this.games = JSON.parse(localStorage.getItem(this.gamesKey));
    this.players = JSON.parse(localStorage.getItem(this.playersKey));
    this.teams = JSON.parse(localStorage.getItem(this.gamesKey));
  }

  clearData(): void {
    this.players = [];
    this.teams = [];
    this.games = [];

    localStorage.removeItem(this.gamesKey);
    localStorage.removeItem(this.teamsKey);
    localStorage.removeItem(this.playersKey);
  }

  private savePlayers(): void {
    localStorage.setItem(this.playersKey, JSON.stringify(this.players));
  }

  private saveTeams(): void {
    localStorage.setItem(this.teamsKey, JSON.stringify(this.teams));
  }

  private saveGames(): void {
    localStorage.setItem(this.gamesKey, JSON.stringify(this.games));
  }

  getGames(): Game[] {
    return this.games;
  }

  loadGame(game: Game): void {
    for (const team of game.teams) {
      this.setTeamColor(team);
    }
  }

  setTeamColor(team: Team): void {
    const bgColor = team?.colors?.primaryColor;
    const textColor = team?.colors?.primaryContrastColor;

    // document.documentElement.style.setProperty(`--team${team.teamNumber}-background-color`, bgColor);
    // document.documentElement.style.setProperty(`--team${team.teamNumber}-color`, textColor);
    // team.players[0].name = team?.teamColor?.name ?? `Team $team.teamNumber}`;
    this.saveTeams();
    this.saveGames();
  }
}
