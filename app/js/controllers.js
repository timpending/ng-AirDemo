app.controller('SearchController', function($scope, $http, AddressSearchService, $route, $location){
  $scope.view = {};
  $scope.view.error = null;
  $scope.view.data = {};
  $scope.view.current = {display: false};

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
    $scope.view.current = AddressSearchService.results
    $scope.view.current.image = AddressSearchService.getCurrentStreetViewImg(AddressSearchService.results);
    $scope.view.current.display = true;
  }
})

// gMaps StreetView URL: https://maps.googleapis.com/maps/api/streetview?size=600x300&location=39.717953,-104.985879&key=AIzaSyBdTlnuIm3BaESwJbfcIpbACvsgRh21UXg
//https://maps.googleapis.com/maps/api/streetview?size=600x300&location=3358%20Navajo%20St%2080211&key=AIzaSyBdTlnuIm3BaESwJbfcIpbACvsgRh21UXg
