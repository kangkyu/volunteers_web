angular
.module('eventServiceModule', [])
.factory('eventService', function(){
    eventService = {};
    events = [];

    events = [
        {
            title: "Olympics",
            address: "Rio De Janeiro, Brazil",
            date: "Aug 21, 2016",
            time: "1pm"
        },
        {
            title: "Super Bowl",
            address: "Phoenix, Arizona",
            date: "Feb 1, 2015",
            time: "2am"
        },
        {
            title: "World Cup",
            address: "Rio De Janeiro, Brazil",
            date: "Jun 12, 2014",
            time: "2pm"
        },
        {
            title: "World Series",
            address: "San Francisco, California",
            date: "Oct 21, 2014",
            time: "3pm"
        }
    ];

    eventService.getAll = function(){
        return events;
    };

    eventService.setAll = function(data){
        events = data;
    }

    return eventService;
});