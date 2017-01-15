app.service('AddressSearchService', function($http){
  return {
    query: function(movie) {
      var movie = movie.movie
      return $http.get('http://www.omdbapi.com/?s='+movie)
    },
  results: {},
  singleMovie: function(id){
    return $http.get('http://www.omdbapi.com/?i='+id).then(function(data){
      return data
    })
  },
  movie: {},
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
  }
})
