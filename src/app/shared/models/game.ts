import { Team } from './team';

export class Game {
    maxTeams: number;
    minTeams = 2;

    maxPlayersPerTeam: number;
    minPlayersPerTeam = 1;
    playersPerTeam = 1;

    teams: Team[];

    constructor() { }
}
