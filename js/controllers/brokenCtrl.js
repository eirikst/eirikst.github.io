var app = angular.module('oddsgeir');
app.controller('brokenCtrl', ['$scope', 'testDataService', 'sortingService',
      'localStorageService', 'betexScraper',
      function($scope, testDataService, sortingService, localStorageService,
      betexScraper) {
  var thiss = this;
  $scope.teams = localStorageService.getTeams();
  if($scope.teams == undefined || $scope.teams.length == 0) {
    $scope.teams = [];
    console.log("Data ikke i localstore");
    refreshData();
  }
  else {
    console.log("Data i localstore");

  }

  //callback from getting betex data
  this.callback = function(teams) {
    $scope.$apply(function(){
      $scope.teams = teams;
      $scope.showSpinner = false;
      sortingService.sortMatchesForTeams($scope.teams);//TODO: burde dette ligge her?
      localStorageService.storeTeams($scope.teams);

      //feilhåndtering, sjekker feil rapportert i scraperen
      var errs = betexScraper.getErrs();
      if(errs.length > 0) {
        var strng = "";
        for(var i = 0; i < errs.length; i++) {
          strng += errs[i] + "\n";
        }
        alert("Det skjedde en eller annen feil da gitt. Send Eirik en melding med feilen under.\n\nFeil:\n" + strng);
      }
    });
  }

  //update betex data
  function refreshData() {
    $scope.teams.length = 0;
    $scope.showSpinner = true;
    var promise = betexScraper.scrape(thiss);
  }

  $scope.refreshData = function() {
    refreshData();
  }

  $scope.redirectFixtures = function(league) {
    return league.fixturesUrl();
  }

  $scope.redirectSummary = function(league) {
    return league.summaryUrl();
  }
}]);
