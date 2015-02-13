angular
.module('userServiceModule', [])
.factory('userService', ['$http',
function($http){
    userService = {};

    userService.loadAll = function(){
        return $http.get('/api/users');
    };

    userService.loadById = function(id){
        return $http.get('/api/users/' + id);
    };
    
    // userService.getById = function(id){
    //     var match = users.filter(function(user){
    //         return parseInt(user._id) === parseInt(id);
    //     });
    //     return match.pop() || {};
    // };

    return userService;
}]);
