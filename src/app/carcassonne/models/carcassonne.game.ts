import { Game } from '../../shared/models/game';

export class CarcassonneGame extends Game {
    name = 'Carcassonne';

    maxTeams = 8;
    minTeams = 2;
    teamCount = 2;

    maxPlayersPerTeam = 1;
    minPlayersPerTeam = 1;
    playersPerTeam = 1;
}
