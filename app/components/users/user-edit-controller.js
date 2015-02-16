angular
.module('userEditCtrlModule',[])
.controller('userEditCtrl', ['$scope', '$routeParams', 'userService',
function($scope, $routeParams, userService){

    userService.loadById($routeParams.userId).success(function(data){
        $scope.user = data;
    });

    $scope.updateUser = function(user){
        userService.updateUser(user._id, user).success(function(){
            userService.loadAll().success(function(data){
                $scope.users = data;
            });
        });
    };
}]);
