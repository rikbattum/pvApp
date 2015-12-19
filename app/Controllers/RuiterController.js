(function () {

    'use strict';

// specific controller for handling the Ruiters view;

    angular.module('PVapp').controller('RuiterController', ['memberService', '$location', function (memberService, $location) {

        var vm = this;
        vm.ruiters = {};

        vm.getRuiters = function () {
            console.log('inside getRuiters');

            return memberService.getMember()
                .then(function (ruiters) {
                    console.log('get is ok', ruiters);
                    vm.ruiters = ruiters.data;
                    console.log('ruiters', vm.ruiters);
                })
                .catch(function (error) {
                    console.log('get is error', error);

                });
        };

        vm.getRuiters();

        vm.zoekRuitersLink = function () {
            $location.path('/zoekruiters');
        };

    }]);

})();
