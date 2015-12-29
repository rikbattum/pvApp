(function () {
    'use strict';

    angular.module('PVapp').controller('HorseController', ['horseService', '$location', function (horseService, $location) {
        var vm = this;
        vm.submitting = false;
        vm.showSuccessRegistration;
        vm.showFailureRegistration;
        vm.horsetlist = [];
        vm.selectedHorse = 'jouw paard';

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


    vm.registerHorse = function registerHorse () {
        alert ('registered')
    }
    }]);

})();

