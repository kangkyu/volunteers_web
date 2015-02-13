angular
.module('eventServiceModule', [])
.factory('eventService',['$http',
function($http){
    var eventService = {};
    var urlBase = '/api/events';

    eventService.loadAll = function(){
        return $http.get(urlBase);
    };

    eventService.loadById = function(id){
        return $http.get(urlBase + '/' + id);
    };

    eventService.addEvent = function(event){
        return $http.post(urlBase, event);
    };

    eventService.deleteEvent = function(id){
        return $http.delete(urlBase + '/' + id);
    };

    eventService.updateEvent = function(id, event){
        return $http.put(urlBase + '/'+ id, event);
    };

    return eventService;
}]);
