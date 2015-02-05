angular
.module('volunteerApp', 
[
    'ngRoute',
    'userIndexCtrlModule',
    'userServiceModule',

    'mainCtrlModule'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'mainCtrl'
    })
    .when('/about', {
        templateUrl: 'app/views/about.html'
    })
    .when('/users', {
        templateUrl: 'app/views/user-index.html',
        controller: 'userIndexCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
