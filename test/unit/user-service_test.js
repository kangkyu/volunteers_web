'use strict';

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

    var userService, $httpBackend;
    beforeEach(function(){
        module('userServiceModule');

        inject(function($injector){
            userService = $injector.get('userService');
            $httpBackend = $injector.get('$httpBackend');
        });
    });

    describe('loadAll', function(){
        it("should get all users", function(){
            $httpBackend.expectGET('/api/users').respond(mockUsers);

            var resultUsers;
            userService.loadAll().success(function(data){
                resultUsers = data;
            });

            $httpBackend.flush();
            expect(resultUsers).toEqual(mockUsers);
        });
    });

    describe('loadById', function(){
        it("should get user when id matches one", function(){
            $httpBackend.expectGET('/api/users/' + idPicked).respond(userPicked);

            var resultUser;
            userService.loadById(idPicked).success(function(data){
                resultUser = data;
            });

            $httpBackend.flush();
            expect(resultUser).toEqual(userPicked);
        });

        it("should get empty object when id doesn't match", function(){
            $httpBackend.expectGET('/api/users/' + "nomatch").respond({});

            var resultUser;
            userService.loadById("nomatch").success(function(data){
                resultUser = data;
            });

            $httpBackend.flush();
            expect(resultUser).toEqual({});
        });
    });



    // describe('getAll', function(){

    //     it('should get all users', function(){
    //         userService.setAll(mockUsers);
    //         expect(userService.getAll()).toEqual(mockUsers);
    //     });
    // });

    // describe('getById', function(){
    //     beforeEach(function(){
    //         userService.setAll(mockUsers);
    //     });

    //     it("should get a user if id matching", function(){
    //         expect(userService.getById(idPicked)).toEqual(userPicked);
    //     });

    //     it("should get an empty object if id not matching", function(){
    //         expect(userService.getById("nomatch")).toEqual({});
    //     });
    // });

    // describe('setAll', function(){

    //     it('should set users array with data input', function(){
    //         userService.setAll(mockUsers);
    //         expect(userService.getAll()).toEqual(mockUsers);
    //     });
    // });
});
