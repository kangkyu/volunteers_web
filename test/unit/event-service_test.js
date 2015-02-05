'use strict'

describe('eventService', function(){

    var mockEvents = [
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

    var eventService;
    beforeEach(function(){
        module('eventServiceModule');

        inject(function($injector){
            eventService = $injector.get('eventService');
        });
    });

    describe('getAll', function(){
        beforeEach(function(){
            eventService.setAll(mockEvents);
        });

        it("gets all events", function(){
            expect(eventService.getAll()).toEqual(mockEvents);
        });
    });

    describe('setAll', function(){
        it("sets all events", function(){
            eventService.setAll(mockEvents);
            expect(eventService.getAll()).toEqual(mockEvents);
        });
    });
});