'use strict'

describe('eventIndexCtrl', function(){

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

    it("has $scope.events of all events", function(){
        eventService.setAll(mockEvents);
        expect($scope.events).toEqual(mockEvents);
    });
});