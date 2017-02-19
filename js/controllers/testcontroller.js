angular.module('oddsgeir').
 controller('MyController', ['$scope', 'notify', function($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
   $scope.callNotify();
 }]).
factory('notify', ['$window', function(win) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length === 3) {
       win.alert(msgs.join('\n'));
       msgs = [];
     }
   };
 }]);
/*

<div ng-controller="MyController" ng-click="callNotify()">
  <p>hei</p>
</div>

*/
