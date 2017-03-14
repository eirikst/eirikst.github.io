var app = angular.module("oddsgeir");
app.service("localStorageService", ['$window', function($window) {

  this.storeTeams = function(teams) {
    this.storeObject("teams", teams);
  }

  this.getTeams = function() {
    var objects = this.getObject("teams");
    if(objects != undefined) {
      return this.fromObjectsToTeams(objects);//ferdig formatert array av teams
    }
    return undefined;
  }

  this.storeObject = function(key, value) {
    $window.localStorage[key] = JSON.stringify(value);
  }

  this.getObject = function(key) {
    if($window.localStorage[key] != undefined) {
      try {
        return JSON.parse( $window.localStorage[key] || false );
      }
      catch(e) {
        console.log("Local storage: " + e);
        return undefined;
      }
    }
  }


////////////////////////////////////////////////////////////////////////////////
  /*
   * Methods for converting teams and matches from json to objects of the classes
   * defined in model folder.
  */

  this.fromObjectsToTeams = function(objects) {
    teams = [];

    for(var i = 0; i < objects.length; i++) {
      teams.push(this.fromObjectToTeam(objects[i]));
    }
    return teams;
  }

  this.fromObjectToTeam = function(object) {
    var team = new Team(object.nameStr, object.nationStr);
    team.matches = this.fromObjectsToMatches(object.matches);
    return team;
  }

  this.fromObjectsToMatches = function(objects) {
    matches = [];

    for(var i = 0; i < objects.length; i++) {
      matches.push(this.fromObjectToMatch(objects[i]));
    }
    return matches;
  }

  this.fromObjectToMatch = function(object) {
    return new Match(object.homeTeamStr, object.awayTeamStr,
      object.homeScore, object.awayScore, object.date);
  }
}]);
