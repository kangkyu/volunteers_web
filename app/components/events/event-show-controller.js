angular
.module('eventShowCtrlModule', [])
.controller('eventShowCtrl', 
['$scope', '$routeParams', 'eventService',
function($scope, $routeParams, eventService){

    $scope.events = eventService.getAll();
    $scope.event = eventService.getById($routeParams.eventId);
}]);