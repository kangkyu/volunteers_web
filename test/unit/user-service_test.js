'use strict'

describe('userService', function(){

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

    var idPicked = "2", userPicked = {
        "_id": "2",
        "firstName": "Ty",
        "lastName": "Cobb",
        "email": "ty@example.com"
    };

    var userService;
    beforeEach(function(){
        module('userServiceModule');

        inject(function($injector){
            userService = $injector.get('userService');
        });

        userService.setAll(mockUsers); 
    });

    describe('getAll', function(){

        it('should get all users', function(){
            expect(userService.getAll()).toEqual(mockUsers);
        });
    });

    describe('getById', function(){

        it("should get a user if id matching", function(){
            expect(userService.getById(idPicked)).toEqual(userPicked);
        });

        it("should get an empty object if id not matching", function(){
            expect(userService.getById("nomatch")).toEqual({});
        });
    });
});
