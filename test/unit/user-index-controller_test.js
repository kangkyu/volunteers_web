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

    var $controller, $scope, $rootScope, userIndexCtrl, userService;
    beforeEach(function(){
        module("userIndexCtrlModule");
        module("userServiceModule");

        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            userService = $injector.get('userService');
        });

        userIndexCtrl = $controller('userIndexCtrl',{
            $scope: $scope,
            userService: userService
        });
    });

    it('has an array of all users under its scope', function(){
        userService.setAll(mockUsers);
        expect($scope.users).toEqual(mockUsers);
    });
});
