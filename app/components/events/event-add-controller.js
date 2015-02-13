angular
.module('eventAddCtrlModule', [])
.controller('eventAddCtrl', ['$scope', 'eventService', '$location',
function($scope, eventService, $location){

    $scope.addButton = function(event){
        eventService.addEvent(event).success(function(data){
            $scope.event = data;
            eventService.loadAll().success(function(data){
                $scope.events = data;
            });
            $location.path('/events/' + $scope.event._id);
        });
    };
}]);
