var app = angular.module("oddsgeir");
app.service("betexScraper", ['leagueService', function(leagueService) {
  var thiss = this;
  thiss.allLeagues = [];
  thiss.countryUrls = [];
  thiss.matches = [];
  thiss.teams = [];


  this.scrape = function(ctrl) {
    thiss.ctrl = ctrl;

    thiss.allLeagues = leagueService.testData();

    var matchesUrlPromise = thiss.findMatches(thiss.allLeagues);

    matchesUrlPromise.then(function() {
      thiss.ctrl.callback(thiss.teams);
    })
  }



  this.findMatches = function(leagues) {
    var promises = [];
    for(var i = 0; i < leagues.length; i++) {
      var heidu = leagues[i];

      var request = jQuery.get(leagues[i].url, function(data, response) {
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
                matchesFromLeague.push(createMatch(td));
              }
            }
          }
          thiss.matches.push.apply(thiss.matches, matchesFromLeague);
          createTeams(matchesFromLeague, heidu.nationStr + " " +
          heidu.nameStr);
        }
        catch(e) {
          console.log("Failed getting league's matches: " + e);
          console.log(data);
        }

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

  function createMatch(td) {
    try {
      var homeTeamStr = $(td[0]).find("span")[0].innerHTML;
      var awayTeamStr = $(td[0]).find("span")[1].innerHTML;
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








//DEPRECATED::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    var baseUrl = "http://www.betexplorer.com";


    //Henter ut land fra betex/soccer - countries-liste til høyre, med struktur ul/li/div/a
    this.findCountries = function() {
    	return jQuery.get('http://www.betexplorer.com/soccer/', function(data, response) {
    		var ul = $(data).find("#countries-select");
        var a = ul.find("a");

        for(var i = 0; i < a.length; i++) {
          thiss.countryUrls.push(baseUrl + $(a[i]).attr('href'));
        }
      });
    }


    //Henter ut ligaer fra en liste av urler til countries
    this.findLeagues = function(countryUrls) {
      var urls = [];
      var promises = [];

      for(var i = 0; i < countryUrls.length; i++) {

        promises.push(jQuery.get(countryUrls[i], function(data, response) {
          try {
          //find table.table-main betyr finn table-elementer av klassen table-main
          var table = $(data).find("table.table-main");
          var tbody = table.find("tbody");
          var relevantTbodies = [];

          //struktur tbody/tr/th for navn på liga
          //struktur tbody/tr/td/a for lenker
          for(var i = 0; i < tbody.length; i++) {
            //navn på liga er gjemt i en tr->th
            var th = $(tbody[i]).find("th");
            var nameOfLeague = th.text();
            if(nameOfLeague.indexOf("2017") !== -1 && nameOfLeague.indexOf("Friendly") == -1) {
              //lenkene finnes i en tr->td->a
              var a = $(tbody[i]).find("a");
              for(var j = 0; j < a.length; j++) {
                thiss.allLeagues.push(baseUrl + $(a[j]).attr('href') + "results");
              }
            }
          }
        }
        catch(e) {
          console.log("Failed getting country's leagues: " + e);
          console.log(data);
        }
      }));

    }

    return Q.allSettled(promises)
    .then(function (results) {
      results.forEach(function (result) {
        if (result.state === "fulfilled") {
            thiss.allLeagues.push(result.value);
            console.log("qok findLeagues");
        } else {
            var reason = result.reason;
            console.log("Q get error findLeagues: " + reason);
          }
        });
      });
    }

}]);
