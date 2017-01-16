app.controller('SearchController', function($scope, $http, AddressSearchService, MapService, $route, $location, NgMap){
  var vm = this;
  $scope.view = {};
  $scope.view.error = null;
  $scope.view.data = {};
  $scope.view.current = {display: false};

  $scope.submitSearch = function() {
    if ($scope.searchAddress && $scope.searchAddress.address && $scope.searchAddress. zip) {
      let url = AddressSearchService.createAPIURL($scope.searchAddress);
      AddressSearchService.searchForProperty(url).then(function(results){
        AddressSearchService.results = results.data
      })
      $route.reload();
    } else {
      alert('Address and valid zip code are required to search.')
    }
  }

  $scope.showResults = function() {
    console.log("results: ", AddressSearchService.results);
    $scope.view.data = AddressSearchService.results
    $scope.view.current = AddressSearchService.results
    $scope.view.current.image = AddressSearchService.getCurrentStreetViewImg(AddressSearchService.results);
    MapService.getMap(AddressSearchService.results);
    $scope.view.current.display = true;
  }

  $scope.getAverage = function(obj) {
    let total = 0;
    let count = 0;
    for (let year in obj){
      for (let month in obj[year]) {
        if (!isNaN(obj[year][month])){
          count++
          total+=obj[year][month];
          }
        }
      }
      let average = (total / count);
      return average
    }
    
})
