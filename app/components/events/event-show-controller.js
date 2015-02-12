angular
.module('eventShowCtrlModule', [])
.controller('eventShowCtrl',['$scope', '$routeParams', 'eventService',
function($scope, $routeParams, eventService){

    // eventService.loadAll().then(function(){
    //     $scope.event = eventService.getById($routeParams.eventId);
    // });

    eventService.loadById($routeParams.eventId).success(function(data){
        $scope.event = data;
    });

    $scope.deleteButton = function(){
        eventService.deleteEvent($scope.event._id);
    };
}]);
