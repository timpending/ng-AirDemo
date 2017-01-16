var app = angular.module('NgAirdna', ['ngRoute', 'chart.js', 'chartjs-directive', 'ngMap']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'SearchController'
    })
  $locationProvider.html5Mode(true);
  // zillz:
  // X1-ZWz19erymlnnrf_1d5w6
  // googz:
  // AIzaSyBdTlnuIm3BaESwJbfcIpbACvsgRh21UXg
})
