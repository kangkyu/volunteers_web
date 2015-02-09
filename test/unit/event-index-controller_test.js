'use strict';

describe('eventIndexCtrl', function(){

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

    var $scope, $rootScope, eventIndexCtrl, $controller, eventService;
    beforeEach(function(){
        module("eventIndexCtrlModule");
        module("eventServiceModule");

        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            eventService = $injector.get('eventService');
        });

        eventIndexCtrl = $controller('eventIndexCtrl',{
            $scope: $scope,
            eventService: eventService
        });
    });

    it("should have all events under scope", function(){
        eventService.setAll(mockEvents);

        expect(eventService.getAll()).toEqual(mockEvents);
    });
});
