angular
.module('volunteerApp', 
[
    'ngRoute',
    'userIndexCtrlModule',
    'userServiceModule',
    'eventIndexCtrlModule',
    'eventServiceModule',
    'eventShowCtrlModule',
    'eventAddCtrlModule',
    'eventEditCtrlModule',
    'userAddCtrlModule',

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
    .when('/users/new', {
        templateUrl: 'app/components/users/user-add.html',
        controller: 'userAddCtrl'
    })
    .when('/events', {
        templateUrl: 'app/components/events/event-index.html',
        controller: 'eventIndexCtrl'
    })
    .when('/events/new', {
        templateUrl: 'app/components/events/event-add.html',
        controller: 'eventAddCtrl'
    })
    .when('/events/:eventId/edit', {
        templateUrl: 'app/components/events/event-edit.html',
        controller: 'eventEditCtrl'
    })
    .when('/events/:eventId', {
        templateUrl: 'app/components/events/event-show.html',
        controller: 'eventShowCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
