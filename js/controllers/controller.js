var app = angular.module('oddsgeir');
app.controller('brokenCtrl', ['$scope', 'testdata', 'sorting', 'brokenRunService',
function($scope, testdata, sorting, brokenRunService) {

  //init data

  //init test data
  $scope.teams = testdata.actualBrokenData(1);
  sorting.sortMatchesForTeams($scope.teams);

  for(var i = 0; i < $scope.teams.length; i++) {
    console.log($scope.teams[i].nameStr + ' ' + brokenRunService.isBrokenTeam($scope.teams[i],5));
  }






  $scope.test = function() {
    for(var i = 0; i < $scope.teams.length; i++) {
      console.log($scope.teams[i].nameStr + ' ' + brokenRunService.isBrokenTeam($scope.teams[i],5));
    }
  }

  console.log($scope.teams);
}]);
