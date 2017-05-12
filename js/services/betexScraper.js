var app = angular.module("oddsgeir");
app.service("betexScraper", ['leagueService', function(leagueService) {
  var thiss = this;
  thiss.allLeagues = [];
  thiss.countryUrls = [];
  thiss.matches = [];
  thiss.teams = [];


  this.scrape = function(ctrl) {
    thiss.ctrl = ctrl;
    thiss.err = [];

    thiss.allLeagues = leagueService.allLeagues();

    var matchesUrlPromise = thiss.findMatches(thiss.allLeagues);

    matchesUrlPromise.then(function() {
      thiss.ctrl.callback(thiss.teams);
    })
  }



  this.findMatches = function(leagues) {
    var promises = [];
    for(var i = 0; i < leagues.length; i++) {

      var thisUrl = leagues[i].url;
      var thisCallback = function(data, response, tt) {
        var matchesFromLeague = [];
        var teams = [];
        try {
          var tbody = $(data).find("tbody")[0];

          var tr = $(tbody).find("tr");
          for(var i = 0; i < tr.length; i++) {
            var td = $(tr[i]).find("td");
            var isTd = td.length > 0;
            if(isTd) {
              var date = parseDate(td[5].innerHTML);
              if(date <= new Date()) {//match has been played
                var match = createMatch(td);
                if(match != null) {
                  matchesFromLeague.push(match);
                }
                else {
                  //TODO: RAPPORTER FEIL
                }
              }
            }
          }
          thiss.matches.push.apply(thiss.matches, matchesFromLeague);
          createTeams(matchesFromLeague, leagueService.getLeagueFromUrl(this.url));
        }
        catch(e) {
          console.log("Failed getting league's matches: " + e);
          console.log(data);
          registerError("Failed getting league's matches: " + e);
          registerError(data);
        }
      };

      request = jQuery.ajax({
          url: thisUrl,
          success: thisCallback
      });

      promises.push(request);

    }

    return Q.allSettled(promises)
    .then(function (results) {
      results.forEach(function (result) {
        if (result.state === "fulfilled") {
        } else {
            var reason = result.reason;
            console.log("Q get error findMatches: " + reason);
            console.log(reason);
        }
      });
    });
  }

  function createTeams(matches, league) {
    var teams  = {};
    for(var i = 0; i < matches.length; i++) {
      if(teams[matches[i].homeTeamStr] == undefined) {
        var team = new Team(matches[i].homeTeamStr, league);
        team.addMatch(matches[i]);
        teams[matches[i].homeTeamStr] = team;
      }
      else {
        teams[matches[i].homeTeamStr].addMatch(matches[i]);
      }

      if(teams[matches[i].awayTeamStr] == undefined) {
        var team = new Team(matches[i].awayTeamStr, league);
        team.addMatch(matches[i]);
        teams[matches[i].awayTeamStr] = team;
      }
      else {
        teams[matches[i].awayTeamStr].addMatch(matches[i]);
      }
    }


    //pusher teams inn i teams-array
    for (var key in teams) {
      thiss.teams.push(teams[key]);
    }
   }

  function createMatch(td) {//denne tar egentlig en tabell av td-er
    try {
      var homeTeamStr = $(td[0]).find("span")[0].innerHTML.replace("<strong>", "").replace("</strong>", "");
      var awayTeamStr = $(td[0]).find("span")[1].innerHTML.replace("<strong>", "").replace("</strong>", "");
      var scoreFull = $(td[1]).find("a")[0].innerHTML.split(":");
      var homeScore = scoreFull[0];
      var awayScore = scoreFull[1];
      var date = parseDate(td[5].innerHTML);
      return new Match(homeTeamStr, awayTeamStr, homeScore,
        awayScore, date);
    }
    catch(e) {
      console.log("Failed creating a match: " + e);
      console.log(td);
      registerError("Failed creating a match: " + e);
      registerError(td);
    }
  }


  function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // note parts[1]-1
    return new Date(parts[2], parts[1]-1, parts[0]);
  }





  this.getResourcesFromArray = function(urls) {
    chainedHttpService.getHttpResources(urls).then(function() {
      console.log("thena hit da");
      console.log(chainedHttpService.data);
    });
  }

  thiss.err = [];
  function registerError(msg) {
    thiss.err.push(msg);
  }

  this.getErrs = function() {
    return this.err;
  }



}]);
