(function () {

    'use strict';

    angular.module('PVapp').directive('registerDirective', [function () {
        return {
            restrict: 'EA',
            scope: true,
            controller: 'registerController',
            controllerAs: 'ctrlReg',
            bindToController: true,
            templateUrl: 'app/components/Register/registerMember.html',
            transclude: false
        };
    }]);

})();
