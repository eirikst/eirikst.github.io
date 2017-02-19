var app = angular.module('oddsgeir');

app.service('testdata', function() {

      //Lager ti*timesTen lag med random resultater mellom dem hjemme og borte
      this.actualBrokenData = function(timesTen) {
        var allTeams = [];
        for(var j = 0; j < timesTen; j++) {
          
          //init teams
          var team = new Team('Manchester United', 'England');
          var team1 = new Team('Manchester City', 'England');
          var team2 = new Team('Sleivdal FC', 'England');
          var team3 = new Team('Leeds United', 'England');
          var team4 = new Team('Newcastle United', 'England');
          var team5 = new Team('Birmingham City', 'England');
          var team6 = new Team('Queens Park Rangers', 'England');
          var team7 = new Team('Fulham City', 'England');
          var team8 = new Team('West Ham United', 'England');
          var team9 = new Team('Blackburn Rovers', 'England');

          var teams = [team,team1,team2,team3,team4,team5,team6,team7,team8,team9];
          var matches = [];

          //init matches
          for(var i = 0; i < teams.length; i++) {
            for(var a = 0; a < teams.length; a++) {
              if(i != a) {
                //home match
                var home = Math.floor((Math.random() * 5) + 1);
                var away = Math.floor((Math.random() * 5) + 1);
                teams[i].addMatch(new Match(teams[i], teams[a], home, away,
                  new Date(2017, 0, a+1)));

                //away match
                var home = Math.floor((Math.random() * 5) + 1);
                var away = Math.floor((Math.random() * 5) + 1);
                teams[i].addMatch(new Match(teams[a], teams[i], home, away,
                  new Date(2017, 1, a+1)));
              }
            }
          }
          allTeams = allTeams.concat(teams);
        }

        return allTeams;
      }

});
