angular
.module('eventIndexCtrlModule', [])
.controller('eventIndexCtrl', ['$scope', 'eventService',
function($scope, eventService){

    eventService.loadAll().then(function(){
        $scope.events = eventService.getAll();
    });
}]);
