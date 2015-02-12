angular
.module('eventIndexCtrlModule', [])
.controller('eventIndexCtrl', ['$scope', 'eventService', '$location', '$route',
function($scope, eventService, $location, $route){

    eventService.loadAll().success(function(data){
        $scope.events = data;
    });

    $scope.deleteButton = function(eventId){
        eventService.deleteEvent(eventId).success(function(data){
            $scope.events = data;
            $location.path('/events');
        });
        $route.reload();
    };
}]);
