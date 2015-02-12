angular
.module('userIndexCtrlModule', [])
.controller('userIndexCtrl', ['$scope', 'userService',
function($scope, userService){

    userService.loadAll().success(function(data){
        $scope.users = data;
    });
}]);
