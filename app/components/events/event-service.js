angular
.module('eventServiceModule', [])
.factory('eventService',['$http',
function($http){
    eventService = {};
    events = [];

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
            return event._id === id;
        });
        return match.pop() || {};
    };

    eventService.setAll = function(data){
        events = data;
    };

    return eventService;
}]);
