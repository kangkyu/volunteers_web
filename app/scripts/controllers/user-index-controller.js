angular
.module('userIndexCtrlModule', [])
.controller('userIndexCtrl', 
['$scope', 'userService', 
function($scope, userService){

    $scope.users = userService.getAll();
}]);