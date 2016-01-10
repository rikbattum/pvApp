(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['SessionService', function (SessionService) {
        var vm = this;
        var listener;
        vm.memberinFocus = 'Vriendje';
        vm.name = 'Members ';


        SessionService.registerListener(listener);

    }]);


//    mainctrl.registerMember = function () {
//    memberService.gethorses().then(function (dataResponse) {
//    mainctrl.memberInFocus= dataResponse;


})();
