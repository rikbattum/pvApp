(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['NameNavBarService', function (NameNavBarService) {
        var vm = this;
        vm.memberinFocus = 'Vriendje';
        vm.nameInSession = NameNavBarService.getNameInNavbar();
        console.log(vm.nameInSession);
    }]);
})();
