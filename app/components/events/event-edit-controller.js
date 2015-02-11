angular
.module('eventEditCtrlModule', [])
.controller('eventEditCtrl', ['$scope', 'eventService', '$routeParams', '$location',
function($scope, eventService, $routeParams, $location){

    eventService.loadById($routeParams.eventId).then(function(){
        $scope.event = eventService.getEvent();
    });

    $scope.updateButton = function(){
        eventService.updateEvent($scope.event._id, $scope.event).then(function(){
            $scope.events = eventService.getAll();
            $location.path('/events/'+ $scope.event._id);
        });
    };

}]);
