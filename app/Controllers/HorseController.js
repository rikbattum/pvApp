(function () {
    'use strict';

    angular.module('PVapp').controller('horseController', ['horseService', '$location', function (horseService, $location) {
        var vm = this;

        vm.horsetlist = [];

        vm.getHorses = function () {

            return horseService.getHorse()
                .then(function (horses) {
                    vm.horsetlist = horses;
                    console.log('horses succesfully retrieved');
                })
                .catch(function (error) {
                    console.log('error retrieving horses', error);
                });
        };
    }]);


})();

