angular
.module('userServiceModule', [])
.factory('userService', ['$http',
function($http){
    userService = {};
    users = [];

    userService.loadAll = function(){
        return $http.get('/api/users').success(function(data){
            users = data;
        });
    };

    userService.getAll = function(){
        return users;
    };

    userService.getById = function(id){
        var match = users.filter(function(user){
            return user._id === id;
        });
        return match.pop() || {};
    };

    userService.setAll = function(data){
        users = data;
    };

    return userService;
}]);
