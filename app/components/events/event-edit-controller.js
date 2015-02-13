angular
.module('eventEditCtrlModule', [])
.controller('eventEditCtrl', ['$scope', 'eventService', '$routeParams', '$location',
function($scope, eventService, $routeParams, $location){

    eventService.loadById($routeParams.eventId).success(function(data){
        $scope.event = data;
    });

    $scope.updateButton = function(event){
        eventService.updateEvent(event._id, event).success(function(){
            eventService.loadAll().success(function(data){
                $scope.events = data;
            });
        });
        $location.path('/events/'+ event._id);
    };
}]);
