angular
.module('eventIndexCtrlModule', [])
.controller('eventIndexCtrl', 
['$scope', 'eventService',
function($scope, eventService){

    $scope.events = eventService.getAll();
}]);
