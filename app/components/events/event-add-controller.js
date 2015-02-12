angular
.module('eventAddCtrlModule', [])
.controller('eventAddCtrl', ['$scope', 'eventService', '$location',
function($scope, eventService, $location){

    $scope.event = {};

    $scope.addButton = function(){
        eventService.addEvent($scope.event).success(function(data){
            $location.path('/events/' + data._id);
        });
    };
}]);
