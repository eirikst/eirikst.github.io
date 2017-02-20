var Match = class Match {

	constructor(homeTeamStr, awayTeamStr, homeScore, awayScore, date) {
		this.homeTeamStr = homeTeamStr;
		this.awayTeamStr = awayTeamStr;
		this.homeScore = homeScore;
		this.awayScore = awayScore;
		this.date = date;
	}

	//TODO: Her returnerer jeg navn som brukes til videre sammenligning. Kan by på problemer ved like navn...
	winner() {
		if(this.homeScore > this.awayScore) {
			return this.homeTeamStr;
		}
		if(this.awayScore > this.homeScore) {
			return this.awayTeamStr;
		}
		return "draw";
	}

	printable() {
		return this.homeTeamStr.nameStr + ' - ' + this.awayTeamStr.nameStr + ' ' +
		this.homeScore + ' - ' + this.awayScore;
	}
}
