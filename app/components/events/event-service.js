angular
.module('eventServiceModule', [])
.factory('eventService',['$http',
function($http){
    var eventService = {};

    eventService.loadAll = function(){
        return $http.get('/api/events');
    };

    eventService.loadById = function(id){
        return $http.get('/api/events' + '/' + id);
    };

    eventService.addEvent = function(event){
        return $http.post('/api/events', event);
    };

    eventService.deleteEvent = function(id){
        return $http.delete('/api/events' + '/' + id);
    };

    eventService.updateEvent = function(id, event){
        return $http.put('/api/events' + '/'+ id, event);
    };

    return eventService;
}]);
