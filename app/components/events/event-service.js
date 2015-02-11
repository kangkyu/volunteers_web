angular
.module('eventServiceModule', [])
.factory('eventService',['$http',
function($http){
    eventService = {};
    events = [];
    oneEvent = {};

    eventService.loadAll = function(){
        return $http.get('/api/events').success(function(data){
            events = data;
        });
    };

    eventService.getAll = function(){
        return events;
    };

    eventService.getById = function(id){
        var match = events.filter(function(event){
            return event._id == id;
        });
        return match.pop() || {};
    };

    eventService.setAll = function(data){
        events = data;
    };

    eventService.loadById = function(id){
        return $http.get('/api/events/'+ id).success(function(data){
            oneEvent = data;
        });
    };

    eventService.addEvent = function(event){
        return $http.post('/api/events', event).success(function(data){
            oneEvent = data;
        });
    };

    eventService.getEvent = function(){
        return oneEvent;
    };

    eventService.deleteEvent = function(id){
        return $http.delete('/api/events/'+ id).success(function(data){
            oneEvent = data;
        });
    };

    eventService.updateEvent = function(id, event){
        return $http.put('/api/events/'+ id, event).success(function(data){
            oneEvent = data;
        });
    };

    return eventService;
}]);
