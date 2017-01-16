app.service('AddressSearchService', function($http, NgMap, $route){
  return {
  results: {},
  address: {},
  searchForProperty: function(url) {
    // return $http.get(url);
    return $http.get('../sample.json');
  },
  createAPIURL: function(addressObj) {
    let baseURL = "http://api.airdna.co/v1/rentalizer/estimate?access_token=NTE4OQ|906b190a6082428d904238278819b91c"
    let urlAddress = addressObj.address.replace(/\s+/g, '%20').replace(/#/g, "%23");

    let queryURL = `${baseURL}&address=${urlAddress}&zipcode=${addressObj.zip}`
      if (addressObj.searchBR){
        queryURL += `&bedrooms=${addressObj.searchBR}`
      }
      if(addressObj.searchBA){
        queryURL += `&bathrooms=${addressObj.searchBA}`
      }
      if (addressObj.searchAccom) {
        queryURL += `&accomodates=${addressObj.searchAccom}`
      }
      return queryURL
    },
    getCurrentStreetViewImg: function (addressObj) {
      let gMapsBaseURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
      let middle = `${addressObj.property_details.address.replace(/\s+/g, '%20').replace(/#/g, "%23")}%20${addressObj.property_details.zipcode}`
      let end = "&key=AIzaSyBdTlnuIm3BaESwJbfcIpbACvsgRh21UXg";
      console.log(gMapsBaseURL+middle+end);
      return `${gMapsBaseURL}${middle}${end}`
    },

  }
})

app.service('MapService', function($http, NgMap, $route){
  return {
    getMap: function(results){
      console.log("in service");
      NgMap.getMap().then(function(map) {
        
      });
      return results
    }
  }
})
