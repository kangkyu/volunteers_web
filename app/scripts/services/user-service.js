angular
.module('userServiceModule', [])
.factory('userService', function(){
    userService = {};
    users = [
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

    userService.getAll = function(){
        return users;
    };

    userService.getById = function(id){
        var match = users.filter(function(user){
            return user._id === id;
        });
        match.push({});
        return match.shift();
    };

    userService.setAll = function(data){
        users = data;
    };

    return userService;
});