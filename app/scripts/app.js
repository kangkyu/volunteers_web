angular
.module('volunteerApp', [
    'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
