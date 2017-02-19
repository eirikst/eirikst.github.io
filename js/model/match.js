var Match = class Match {

	constructor(homeTeam, awayTeam, homeScore, awayScore, date) {
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.homeScore = homeScore;
		this.awayScore = awayScore;
		this.date = date;
	}

	winner() {
		if(this.homeScore > this.awayScore) {
			return this.homeTeam;
		}
		if(this.awayScore > this.homeScore) {
			return this.awayTeam;
		}
		return "draw";
	}

	printable() {
		return this.homeTeam.nameStr + ' - ' + this.awayTeam.nameStr + ' ' +
		this.homeScore + ' - ' + this.awayScore;
	}
}
