angular
.module('eventShowCtrlModule', [])
.controller('eventShowCtrl',['$scope', '$routeParams', 'eventService',
function($scope, $routeParams, eventService){

    eventService.loadAll().then(function(){
        $scope.events = eventService.getAll();
        $scope.event = eventService.getById($routeParams.eventId);
    });
}]);
