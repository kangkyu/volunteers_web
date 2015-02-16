angular
.module('userAddCtrlModule', [])
.controller('userAddCtrl', ['$scope', 'userService',
function($scope, userService){

    $scope.addUser = function(user){
        userService.addUser(user).success(function(data){
            $scope.user = data;
            userService.loadAll().success(function(data){
                $scope.users = data;
            });
        });
    };
}]);