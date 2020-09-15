import { Player } from './player';
import { Team } from './team';

export class Game {
    name: string;

    maxTeams: number;
    minTeams = 2;

    maxPlayersPerTeam: number;
    minPlayersPerTeam = 1;

    constructor(public teams: Team[] = null) {
        if (!this.teams) {
            this.teams = [];
            for (let i = 0; i < this.minTeams; i++) {
                this.addTeam();
            }
        }
    }

    addTeam(): void {
        const players: Player[] = [];
        for (let j = 1; j <= this.minPlayersPerTeam; j++) {
            players.push(new Player(`Player ${j}`));
        }
        this.teams.push(new Team(players));
    }

    removeTeam(team: Team): void {
        const index = this.teams.indexOf(team);
        console.log(this.teams);
        if (index > -1) { this.teams.splice(index, 1); }
        console.log(this.teams);
    }
}
