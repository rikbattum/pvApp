(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['SessionService', function (SessionService) {
        var vm = this;
        vm.memberinFocus = 'Vriendje';
        vm.nameInSession = undefined;

        var determineNameInNavbar = function determineNameInNavbar(session) {
            if (vm.nameInSession === undefined) {
                vm.nameInSession = 'Jouw boek';
            }
            else {
                vm.nameInSession = session.name;
            }
            return vm.nameInSession;
        };
        SessionService.registerListener(determineNameInNavbar());
    }]);
})();
