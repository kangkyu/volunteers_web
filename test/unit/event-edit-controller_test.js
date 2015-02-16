'use strict';

describe('eventEditCtrl', function(){
    var editId = 3, eventEdit = {
        _id: 3,
        title: "Moon Festival",
        address: "Chinatown, Los Angeles, California",
        date: "September 13, 2014",
        time: "6pm"
    }, eventUpdated = {
        _id: 3,
        title: "Moon Cake Festival",
        address: "Chinatown, Los Angeles",
        date: "September 13, 2014",
        time: "2am"
    };

    var eventsBeforeEdit = [
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
            _id: 3,
            title: "Moon Festival",
            address: "Chinatown, Los Angeles, California",
            date: "September 13, 2014",
            time: "6pm"
        }
    ];

    var eventsAfterEdit = [
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
            _id: 3,
            title: "Moon Cake Festival",
            address: "Chinatown, Los Angeles",
            date: "September 13, 2014",
            time: "2am"
        }
    ];

    var eventService, eventEditCtrl, $scope, $location, $rootScope, $controller, $httpBackend, $routeParams;
    beforeEach(function(){
        module('eventEditCtrlModule');
        module('eventServiceModule');

        inject(function($injector){
            eventService = $injector.get('eventService');
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            $scope = $rootScope.$new();
            $routeParams = {'eventId': editId};
            $httpBackend = $injector.get('$httpBackend');
        });

        eventEditCtrl = $controller('eventEditCtrl',
            {
                $scope: $scope,
                eventService: eventService,
                $location: $location,
                $routeParams: $routeParams
            }
        );
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should show pre-filled event attributes on edit form", function(){
        $httpBackend.expectGET('/api/events/' + $routeParams.eventId).respond(eventEdit);
        $httpBackend.flush();

        expect($scope.event).toEqual(eventEdit);
    });

    describe('updateButton', function(){

        it("should edit an event from the form", function(){
            // mock data
            $httpBackend.expectGET('/api/events/' + $routeParams.eventId).respond(eventEdit);
            $httpBackend.whenPUT('/api/events/' + $routeParams.eventId, eventUpdated).respond(eventUpdated);
            $httpBackend.expectGET('/api/events').respond(eventsAfterEdit);

            // actual function call
            $scope.updateButton(eventUpdated);

            // compare mock data with the result of function
            $httpBackend.flush();
            expect($scope.events).toEqual(eventsAfterEdit);
        });
    });
});
