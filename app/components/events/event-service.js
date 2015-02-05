angular
.module('eventServiceModule', [])
.factory('eventService', function(){
    eventService = {};
    events = [];

    events = [
        {
            _id: "1",
            title: "Olympics",
            address: "Rio De Janeiro, Brazil",
            date: "Aug 21, 2016",
            time: "1pm"
        },
        {
            _id: "2",
            title: "Super Bowl",
            address: "Phoenix, Arizona",
            date: "Feb 1, 2015",
            time: "2am"
        },
        {
            _id: "3",
            title: "World Cup",
            address: "Rio De Janeiro, Brazil",
            date: "Jun 12, 2014",
            time: "2pm"
        },
        {
            _id: "4",
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

    eventService.getById = function(id){
        var match = events.filter(function(event){
            return event._id === id;
        });
        match.push({});
        return match.shift();
    };

    return eventService;
});
