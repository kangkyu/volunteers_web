'use strict';

describe('eventAddCtrl', function(){

    var $scope, eventService, $location, $rootScope, $controller, eventAddCtrl;
    beforeEach(function(){
        module('eventAddCtrlModule');
        module('eventServiceModule');

        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            eventService = $injector.get('eventService');
            $scope = $rootScope.$new();
        });

        eventAddCtrl = $controller('eventAddCtrl',
            {
                $scope: $scope,
                eventService: eventService,
                $location: $location
            }
        );
    });

    it("should add an event from the form input", function(){
        $scope.event = {
            _id: 6,
            title: "Moon Festival",
            address: "Chinatown, Los Angeles, California",
            date: "September 13, 2014",
            time: "6pm"
        };
        // $scope.addButton();
        
        // expect... ?
    });
});
