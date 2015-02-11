angular
.module('eventIndexCtrlModule', [])
.controller('eventIndexCtrl', ['$scope', 'eventService', '$location',
function($scope, eventService, $location){

    eventService.loadAll().then(function(){
        $scope.events = eventService.getAll();
    });

    $scope.deleteButton = function(event){
        eventService.deleteEvent(event._id).then(function(){
            $scope.events = eventService.getAll();
            $location.path('/events');
        });
    };
}]);

