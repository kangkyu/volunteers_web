angular
.module('userIndexCtrlModule', [])
.controller('userIndexCtrl', ['$scope', 'userService',
function($scope, userService){

    userService.loadAll().then(function(){
      $scope.users = userService.getAll();  
    });
    
}]);
