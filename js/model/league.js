var League = class League {
	
	constructor(nameStr, nationStr) {
		this.nameStr = nameStr;
		this.nationStr = nationStr;
		this.teams = [];
	}
	
	addTeam(team) {
		this.teams.push(team);
	}
	
	addTeams(teams) {
		for(var i = 0; i < teams.length; i++) {
			this.teams.push(teams[i]);
		}
	}
}