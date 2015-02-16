angular
.module('userServiceModule', [])
.factory('userService', ['$http',
function($http){
    var userService = {};

    userService.loadAll = function(){
        return $http.get('/api/users');
    };

    userService.loadById = function(id){
        return $http.get('/api/users' + '/' + id);
    };
    
    userService.addUser = function(user){
        return $http.post('/api/users', user);
    };

    userService.updateUser = function(id, user){
        return $http.put('/api/users' + '/' + id, user);
    };

    userService.deleteUser = function(id){
        return $http.delete('/api/users' + '/' + id);
    };

    return userService;
}]);
