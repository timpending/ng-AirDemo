app.controller('SearchController', function($scope, $http, AddressSearchService, $route, $location){
  $scope.view = {};
  $scope.view.error = null;
  $scope.view.data = {};
  $scope.submitSearch = function() {
    let url = AddressSearchService.createAPIURL($scope.searchAddress);
    console.log("controller url", url);

    AddressSearchService.searchForProperty(url).then(function(results){
      AddressSearchService.results = results.data
    })
    $route.reload();
  }
  $scope.showResults = function() {
    console.log("results: ", AddressSearchService.results);
    $scope.view.data = AddressSearchService.results
  }

})
//
// app.controller('ShowController', function($scope, AddressSearchService, $routeParams, $http, $route) {
//     $scope.view = {};
//     $scope.view.error = null;
//
//     $scope.showResults = function() {
//       console.log("results: ", AddressSearchService.results);
//     }
// })
