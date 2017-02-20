var app = angular.module('oddsgeir');
app.controller('brokenCtrl', ['$scope', 'testDataService', 'sortingService', 'localStorageService',
function($scope, testDataService, sortingService, localStorageService) {

  //init test data
  $scope.teams = testDataService.getTestData();


  sortingService.sortMatchesForTeams($scope.teams);//TODO: burde dette ligge her?
  localStorageService.storeTeams($scope.teams);

  $scope.refreshData = function() {
    console.log("bror");
    $scope.teams = testDataService.actualBrokenData(1);
    localStorageService.storeTeams($scope.teams);//TODO: lagrer ikke i local store her
  }
}]);
