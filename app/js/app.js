var app = angular.module('NgAirdna', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController'
    })
  $locationProvider.html5Mode(true);
})
