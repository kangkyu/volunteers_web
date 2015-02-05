angular
.module('volunteerApp', 
[
    'ngRoute',
    'userIndexCtrlModule',
    'userServiceModule',
    'eventIndexCtrlModule',
    'eventServiceModule',

    'mainCtrlModule'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/components/main/main.html',
        controller: 'mainCtrl'
    })
    .when('/about', {
        templateUrl: 'app/components/about/about.html'
    })
    .when('/users', {
        templateUrl: 'app/components/users/user-index.html',
        controller: 'userIndexCtrl'
    })
    .when('/events', {
        templateUrl: 'app/components/events/event-index.html',
        controller: 'eventIndexCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
