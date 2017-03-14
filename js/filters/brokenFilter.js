var app = angular.module('oddsgeir');

app.filter('brokenFilter', function() {
  return function(input, applyFilter, nrOfMatches, isWinning, isLosing) {

    if(!applyFilter) {
      return input;
    }
    //console.log(nrOfMatches + ' ' + isWinning + ' ' + isLosing);//TODO: REMOVE log

    //Assumes a team with a sorted list of matches with the most recent ones first
    this.isBrokenTeamLosingRun = function(team, nrOfMatches) {

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


    //start filtering
    var output = [];

    if(isWinning) {
      for(var i = 0; i < input.length; i++) {
        if(isBrokenTeamWinningRun(input[i], nrOfMatches)) {
          output.push(input[i]);
        }
      }
    }

    if(isLosing) {
      for(var i = 0; i < input.length; i++) {
        if(isBrokenTeamLosingRun(input[i], nrOfMatches)) {
          output.push(input[i]);
        }
      }
    }

    return output;
  }
});
