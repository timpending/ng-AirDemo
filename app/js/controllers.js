app.controller('SearchController', function($scope, $http, AddressSearchService, MapService, $route, $location, NgMap){
  var vm = this;
  $scope.view = {};
  $scope.view.error = null;
  $scope.view.data = {};
  $scope.searchAddress = {};
  $scope.view.current = {display: false};

  $scope.submitSearch = function() {
    if ($scope.searchAddress.address && $scope.searchAddress.zip) {
      let url = AddressSearchService.createAPIURL($scope.searchAddress);
      AddressSearchService.searchForProperty(url).then(function(results){
        // show results
        console.log("results: ", AddressSearchService.results);
        AddressSearchService.results = results.data
        $scope.view.data = AddressSearchService.results
        $scope.view.current = AddressSearchService.results
        $scope.view.current.image = AddressSearchService.getCurrentStreetViewImg(AddressSearchService.results);
        $scope.view.current.latlng = AddressSearchService.results.property_details.lat+","+AddressSearchService.results.property_details.lng
        $scope.view.current.display = true;
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
    $scope.view.current.latlng = AddressSearchService.results.property_details.lat+","+AddressSearchService.results.property_details.lng
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
