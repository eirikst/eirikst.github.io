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
    });
  }

  //update betex data
  function refreshData() {
    $scope.teams = [];
    $scope.showSpinner = true;
    var promise = betexScraper.scrape(thiss);
  }

  $scope.refreshData = function() {
    refreshData();
  }
}]);
