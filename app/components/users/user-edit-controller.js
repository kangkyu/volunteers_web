angular
.module('userEditCtrlModule',[])
.controller('userEditCtrl', ['$scope', '$routeParams', 'userService',
function($scope, $routeParams, userService){

    userService.loadById($routeParams.userId).success(function(data){
        $scope.user = data;
    });

}]);
