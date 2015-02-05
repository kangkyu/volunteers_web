'use strict'

describe('eventService', function(){

    var mockEvents = [
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

    var idPicked = "3", eventPicked = {
            _id: "3",
            title: "World Cup",
            address: "Rio De Janeiro, Brazil",
            date: "Jun 12, 2014",
            time: "2pm"
        };

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

    describe('getById', function(){
        it("gets an event by its id when there's a match", function(){
            eventService.setAll(mockEvents);
            expect(eventService.getById(idPicked)).toEqual(eventPicked);
        });

        it("gets empty object when there's no match by id", function(){
            eventService.setAll(mockEvents);
            expect(eventService.getById("nomatch")).toEqual({});
        });
    });
});

