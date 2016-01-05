(function () {
    'use strict';

    angular.module('PVapp').controller('PaspoortController', ['ngTableParams', function (ngTableParams) {

        var vm = this;
        vm.data = [{name: 'Moroni', age: 50} /*,*/];
        vm.tableParams = new ngTableParams({}, {dataset: vm.data});


    }]);


})();
