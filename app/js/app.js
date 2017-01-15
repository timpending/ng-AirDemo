var app = angular.module('NgAirdna', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController'
    })
  $locationProvider.html5Mode(true);
  // zillow code:
  // X1-ZWz19erymlnnrf_1d5w6
  // google API key:
  // AIzaSyBdTlnuIm3BaESwJbfcIpbACvsgRh21UXg
})
