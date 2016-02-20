(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['NameNavBarService', '$log', function (NameNavBarService, $log) {

        var vm = this;
        vm.getNameInSession = function () {
            try {
                vm.nameMember = NameNavBarService.getNameInNavbar();
                console.log(vm.nameMember);
            }
            catch (error) {
                $log.debug(error);
                $log.debug('test');
            }
        };
        vm.getNameInSession();
    }]);
})();
