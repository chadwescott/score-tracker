import { Player } from './player';
import { TeamColors } from './team-colors';

export class Team {
    constructor(
        public players: Player[] = [],
        public colors: TeamColors = new TeamColors()) {
    }
}
