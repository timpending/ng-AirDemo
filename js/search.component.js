(function() {
  'use strict';

  angular.module("ngAirdna", [])

    .component("search", {
      controller: controller,
      template:
      `
        <h1>Rent this stuff</h1>
        <p>Enter The Street Address</p>
        <input type="text" placeholder="Your address goes here" ng-model="$ctrl.searchAddress"/>
        <input type="text" placeholder="Your zipcode goes here" ng-model="$ctrl.searchZip"/>
        <input type="number" min="0" step="1" maxlength="3" placeholder="Number of Bedrooms" ng-model="$ctrl.searchBR"/>
        <input type="number" min="0" step="1" maxlength="3" placeholder="Number of Bathrooms" ng-model="$ctrl.searchBA"/>

        <h3>Address: {{$ctrl.searchAddress}}</h3>
        <h3>Zip: {{$ctrl.searchZip}}</h3>
        <h3>BR: {{$ctrl.searchBR}}</h3>
        <h3>BA: {{$ctrl.searchBA}}</h3>

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
        vm.br = {total: 0}
        vm.ba = {total: 0}
        vm.accom = {total: 0}

        vm.searchForProperty = () => {
          checkAccom();
          if (vm.searchAddress && vm.searchZip) {
            createAPIURL();
            console.log('url: ', vm.queryURL);
          } else {
            console.log('please enter a value');
          }
        }

        function createAPIURL() {
          vm.urlAddress = vm.searchAddress.replace(/\s+/g, '%20').replace(/#/g, "%23");
          vm.queryURL = `${apiURL}&address=${vm.urlAddress}&zipcode=${vm.searchZip}`
          if (vm.searchBR){
            console.log("br");
            vm.queryURL += `&bedrooms=${vm.searchBR}`
          }
          if(vm.searchBA){
            console.log("ba");
            vm.queryURL += `&bathrooms=${vm.searchBA}`
          }
          if (vm.accom || vm.accom.total !== 0) {
            console.log("TESTING THIS");
            vm.queryURL += `&accomodates=${vm.accom.total}`
          }
        }

        function checkAccom() {
          for (let key in vm.accom) {
            if (vm.accom[key] === true) {
            vm.accom.total++;
            }
          }
          console.log(vm.accom);
        }

      }

}());
