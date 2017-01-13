angular.module("ngAirdna", [])

  .component("greeting", {
    controller: function() {
      const vm = this

      vm.$onInit = () => {
        vm.time = new Date()
      },

      vm.updateTime = () => {
        vm.time = new Date()
      },

      vm.getAddress = () => {
        if (vm.address) {
          console.log('address: ', vm.address);
        } else {
          console.log('please enter a value');
        }
      }
    },

    template:
    `
      <h1>Update This</h1>
      <p>What time is it?</p>
      <p>{{$ctrl.time}}</p>
      <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />

      <input type="text" placeholder="Your address goes here" ng-model="$ctrl.address"/>
      <h3>Address: {{$ctrl.address}}</h3>
      <button ng-click="$ctrl.getAddress()">GET ADDRESS FROM URL</button>
    `
})
