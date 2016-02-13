(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['SessionService', function (SessionService) {
        var vm = this;
        var listener;
        vm.memberinFocus = 'Vriendje';
        vm.nameInSession = undefined;

        vm.determineNameInNavbar = function determineNameInNavbar() {

            if (vm.nameInSession === undefined) {
                vm.nameInSession = 'Jouw boek';
            }
            return vm.nameInSession;
        };

        SessionService.registerListener(listener);


    }]);


//    mainctrl.registerMember = function () {
//    memberService.gethorses().then(function (dataResponse) {
//    mainctrl.memberInFocus= dataResponse;


})();
