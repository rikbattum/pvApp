(function () {
    'use strict';


    angular.module('PVapp').controller('basicController', ['nameNavBarService', '$log', 'loginService', function (nameNavBarService, $log, loginService) {

        var vm = this;
        vm.getNameInSession = function () {
            try {
                vm.nameMember = nameNavBarService.getNameInNavbar();
                console.log(vm.nameMember);
            }
            catch (error) {
                $log.debug(error);
                $log.debug('test');
            }
        };
        vm.getNameInSession();


        vm.login = function login() {

            loginService.login(vm.loginInfo)
                .then(function () {
                    $log.log('login succesvol');
                })
                .catch(function () {
                    $log.log('login niet succesvol');
                });
        };

    }]);
})();
