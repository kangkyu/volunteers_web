angular
.module('eventIndexCtrlModule', [])
.controller('eventIndexCtrl', ['$scope', 'eventService', '$location', '$route',
function($scope, eventService, $location, $route){

    eventService.loadAll().then(function(){
        $scope.events = eventService.getAll();
    });

    $scope.deleteButton = function(eventId){
        eventService.deleteEvent(eventId).then(function(){
            $scope.events = eventService.getAll();
            $location.path('/events');
        });
        $route.reload();
    };
}]);

