'use strict';

describe('userIndexCtrl', function(){

    var mockUsers = [
        {
            "_id": "1",
            "firstName": "Randy",
            "lastName": "Johnson",
            "email": "randy@example.com"
        },
        {
            "_id": "2",
            "firstName": "Ty",
            "lastName": "Cobb",
            "email": "ty@example.com"
        },
        {
            "_id": "3",
            "firstName": "Christy",
            "lastName": "Mathewson",
            "email": "christopher@example.com"
        },
        {
            "_id": "4",
            "firstName": "Nap",
            "lastName": "Lajoie",
            "email": "napoleon@example.com"
        }
    ];

    var $controller, $scope, $rootScope, userIndexCtrl, userService, $httpBackend;
    beforeEach(function(){
        module("userIndexCtrlModule");
        module("userServiceModule");

        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            userService = $injector.get('userService');
            $httpBackend = $injector.get('$httpBackend');
        });

        userIndexCtrl = $controller('userIndexCtrl',{
            $scope: $scope,
            userService: userService
        });
    });

    it('should have an array of all users', function(){
        $httpBackend.expectGET('/api/users').respond(mockUsers);
        $httpBackend.flush();        
        expect($scope.users).toEqual(mockUsers);
    });
});
