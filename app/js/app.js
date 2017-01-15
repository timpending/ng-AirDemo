var app = angular.module('AngularMovieDB', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController'
    })
  $locationProvider.html5Mode(true);
})
