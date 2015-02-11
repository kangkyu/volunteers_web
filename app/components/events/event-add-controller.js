angular
.module('eventAddCtrlModule', [])
.controller('eventAddCtrl', ['$scope', 'eventService', '$location',
function($scope, eventService, $location){

    $scope.event = {};

    $scope.addButton = function(){
        eventService.addEvent($scope.event).then(function(){
            newEvent = {};
            newEvent = eventService.getEvent();
            $location.path('/events/' + newEvent._id);
        });
    };
}]);
