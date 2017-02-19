var app = angular.module("oddsgeir");
app.service("brokenRunService", function() {

  this.isBrokenTeam = function(team, nrOfMatches) {
    return this.isBrokenTeamWinningRun(team, nrOfMatches) ||
    this.isBrokenTeamLosingRun(team, nrOfMatches);
  }

  //Assumes a team with a sorted list of matches with the most recent ones first
  this.isBrokenTeamWinningRun = function(team, nrOfMatches) {

    //false if not enough matches
    if(team.matches.length < nrOfMatches+1) {
      return false;
    }
    //false if won lost match
    if(team.didWinMatch(0)) {
      return false;
    }
    //false if drew last
    if(team.didDrawMatch(0)) {
      return false;
    }
    //if lost any of the last nrOfMatches before the most recent, then false
    for(var i = 1; i < nrOfMatches+1; i++) {
      if(team.didLoseMatch(i)) {
        return false;
      }
    }

    //team is broken
    return true;
  }


  this.isBrokenTeamLosingRun = function(team, nrOfMatches) {

    //false if not enough matches
    if(team.matches.length < nrOfMatches+1) {
      return false;
    }
    //false if did lost last match
    if(team.didLoseMatch(0)) {
      return false;
    }
    //false if drew last
    if(team.didDrawMatch(0)) {
      return false;
    }
    //if won any of the last nrOfMatches before the most recent, then false
    for(var i = 1; i < nrOfMatches+1; i++) {
      if(team.didWinMatch(i)) {
        return false;
      }
    }

    //team is broken
    return true;
  }

});
