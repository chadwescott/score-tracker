import { Game } from '../../shared/models/game';

export class CarcassonneGame extends Game {
    maxTeams = 8;
    minTeams = 2;

    maxPlayersPerTeam = 1;
    minPlayersPerTeam = 1;
}
