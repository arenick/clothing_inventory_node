"use strict"
const accessories = {
    template: `
    <button ng-click="$ctrl.getAccessories();">Get Accessories</button>
    <form ng-submit="$ctrl.postAccessories($ctrl.newAccessories);">
      <input type="text" ng-model="$ctrl.newAccessories.item" placeholder="item">
      <input type="text" ng-model="$ctrl.newAccessories.size" placeholder="Size">
      <input type="text" ng-model="$ctrl.newAccessories.material" placeholder="material">
      <input type="text" ng-model="$ctrl.newAccessories.price" placeholder="Price">
      <button>Add Accessory</button>
    </form>
    <p ng-repeat="accessories in $ctrl.accessoriesList track by $index">{{ accessories }}
      <button ng-click="$ctrl.deleteAccessories($index);">X</button>
    </p>
    
  `,

  //$http sets up the http endpoints for the backend to interact with
    controller: function($http) {
        const vm = this;

        //gets the array from the api
        vm.getAccessories = () => {
            $http({
                url: "/api/shop/accessories",
                method: "GET"
            }).then((response) => {
                vm.accessoriesList = response.data;
                console.log(response.data);
            });
        };

        //deletes objects in the array in the api
        vm.deleteAccessories = (index) => {
            console.log(index);
            $http({
                url: "/api/shop/accessories/" + index,
                method: "DELETE"
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };

        //updates items in the api
        vm.updateAccessories = (index, newAccessories) => {
            $http({
                url: "/api/shop/accessories/" + index,
                method: "PUT",
                data: newAccessories
            }).then((response) => {
                vm.accessoriesList = response.data;
            });
        };

        //sends data from the api into the component and into the view
        vm.postAccessories = (newAccessories) => {
            $http({
                url: "/api/shop/accessories/",
                method: "POST",
                data: newAccessories
            }).then((response) => {
                vm.accessoriesList = response.data;
            });   
        };
    }
}

angular
    .module("App")
    .component("accessories", accessories);