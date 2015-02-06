'use strict';

describe('eventShowModule', function(){
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

    var mockEventId = "2";
    var resultEvent = {
        _id: "2",
        title: "Super Bowl",
        address: "Phoenix, Arizona",
        date: "Feb 1, 2015",
        time: "2am"
    };

    var $scope, $rootScope, $routeParams, $controller, eventShowCtrl, eventService;
    beforeEach(function(){
        module("eventShowCtrlModule");
        module("eventServiceModule");

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $routeParams = { 'eventId': mockEventId };
            $controller = $injector.get('$controller');
            eventService = $injector.get('eventService');
        });

        eventShowCtrl = $controller('eventShowCtrl', {
            $scope: $scope,
            $routeParams: $routeParams,
            eventService: eventService
        });
    });

    it('find a event object with event id on url', function(){

        eventService.setAll(mockEvents);
        $scope.event = eventService.getById($routeParams.eventId);

        expect($scope.event).toEqual(resultEvent);
    });
});
