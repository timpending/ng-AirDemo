(function() {
  'use strict';

  angular.module("ngAirdna", [])

    .component("search", {
      controller: controller,
      template:
      `
        <h1>Rentalizer API Demo</h1>
        <p>Enter The Street Address</p>
        <input type="text" placeholder="Your address goes here" ng-model="$ctrl.searchAddress"/>
        <input type="text" placeholder="Your zipcode goes here" ng-model="$ctrl.searchZip"/>
        <input type="number" min="0" step="1" maxlength="3" placeholder="Number of Bedrooms" ng-model="$ctrl.searchBR"/>
        <input type="number" min="0" step="1" maxlength="3" placeholder="Number of Bathrooms" ng-model="$ctrl.searchBA"/>
        <input type="number" min="0" step="1" maxlength="3" placeholder="Accomodates" ng-model="$ctrl.searchAccom"/>

        <h3>Address: {{$ctrl.searchAddress}}</h3>
        <h3>Zip: {{$ctrl.searchZip}}</h3>
        <h3>BR: {{$ctrl.searchBR}}</h3>
        <h3>BA: {{$ctrl.searchBA}}</h3>
        <h3>Accomodates: {{$ctrl.searchAccom}}</h3>

        <label>
          <input type="checkbox" ng-model="$ctrl.accom.pool" />Pool?
        </label>
        <label>
          <input type="checkbox" ng-model="$ctrl.accom.hotTub" />Hot Tub?
        </label>
        <label>
          <input type="checkbox" ng-model="$ctrl.accom.cable" />Cable TV?
        </label>
        <label>
          <input type="checkbox" ng-model="$ctrl.accom.freeParking" />Free Parking?
        </label>

        <button ng-click="$ctrl.searchForProperty()">GET ADDRESS FROM URL</button>
      `
    })

    controller.$inject = ['$http']
    function controller($http) {
        const vm = this
        const apiURL = "http://api.airdna.co/v1/rentalizer/estimate?access_token=NTE4OQ|906b190a6082428d904238278819b91c";
        vm.results = {};
        vm.br = {}
        vm.ba = {}
        vm.accom = {}

          vm.searchForProperty = () => {
            if (vm.searchAddress && vm.searchZip) {
              // Builds the API Query URL based on given parameters
              createAPIURL();
              console.log('url: ', vm.queryURL);
              // Hits the API
              // $http.get(vm.queryURL).then( function (response) {
              //   let results = response.data
              //   storeResults(results);
              // })
              // Saved Search Results for 76 Lincoln Street
              // $http.get('../sample.json').then(function(response){
              //   let results = response.data
              //   storeResults(results);
              // })
            } else {
              console.log('please enter a value');
            }
          }

          function createAPIURL() {
            vm.urlAddress = vm.searchAddress.replace(/\s+/g, '%20').replace(/#/g, "%23");
            vm.queryURL = `${apiURL}&address=${vm.urlAddress}&zipcode=${vm.searchZip}`
            if (vm.searchBR){
              vm.queryURL += `&bedrooms=${vm.searchBR}`
            }
            if(vm.searchBA){
              vm.queryURL += `&bathrooms=${vm.searchBA}`
            }
            if (vm.searchAccom) {
              vm.queryURL += `&accomodates=${vm.searchAccom}`
            }
            console.log(vm.queryURL);
          }

          function storeResults(data) {
            vm.results.property_details = data.property_details;
            vm.results.comps = data.comps // array
            vm.results.occ_predicted = data.occ_predicted; // obj with year objects
            vm.results.revenue_potential = data.revenue_potential; // obj with year objects
            vm.results.adr_predicted = data.adr_predicted;  // obj with year objects
            console.log(vm.results);
          }
        }


}());
