angular
.module('eventServiceModule', [])
.factory('eventService',['$http',
function($http){
    eventService = {};

    eventService.loadAll = function(){
        return $http.get('/api/events').success(function(data){
        });
    };

    eventService.loadById = function(id){
        return $http.get('/api/events/'+ id).success(function(data){
        });
    };

    eventService.addEvent = function(event){
        return $http.post('/api/events', event).success(function(data){
        });
    };

    eventService.deleteEvent = function(id){
        return $http.delete('/api/events/'+ id).success(function(data){
        });
    };

    eventService.updateEvent = function(id, event){
        return $http.put('/api/events/'+ id, event).success(function(data){
        });
    };

    return eventService;
}]);
