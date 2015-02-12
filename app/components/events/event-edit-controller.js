angular
.module('eventEditCtrlModule', [])
.controller('eventEditCtrl', ['$scope', 'eventService', '$routeParams', '$location',
function($scope, eventService, $routeParams, $location){

    eventService.loadById($routeParams.eventId).success(function(data){
        $scope.event = data;
    });

    $scope.updateButton = function(){
        eventService.updateEvent($scope.event._id, $scope.event).success(function(data){
            $scope.events = data;
            $location.path('/events/'+ $scope.event._id);
        });
    };
}]);
