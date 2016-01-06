(function () {
    'use strict';

    angular.module('PVapp').controller('PaspoortController', ['ngTableParams', function (ngTableParams, ngTableController) {


        var vm = this;
        vm.data = [{name: 'Moroni', age: 50}, {name: 'Rik', age: 15}, {name: 'Esther', age: 35}];
        vm.tableParams = new ngTableParams({}, {dataset: vm.data});
    }]);
})();
