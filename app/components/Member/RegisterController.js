(function () {
    'use strict';

    angular.module('PVapp').controller('registerController', ['memberService', '$timeout', '$location', '$log', function (memberService, $timeout, $location, $log) {

        var vm = this;
        vm.submitting = false;
        vm.showSuccessRegistration;
        vm.showFailureRegistration;

        function getRandomIntInclusive(min, max) {
            var x = Math.floor(Math.random() * (max - min + 1)) + min;
            var y = Math.floor(Math.random() * (max - min + 1)) + min;
            var z = Math.floor(Math.random() * (max - min + 1)) + min;
            var memberid = Math.floor(x * y / z);
            return (memberid);
        }

        vm.registerMember = function () {
            vm.submitting = true;
            vm.newMember.memberId = getRandomIntInclusive(0, 100000000000000);
            $log.log('this is memberId', vm.newMember.memberId);

            memberService.postNewMember(vm.newMember)
                .then(function (data) {
                    $log.log('post succesfull', data, data.status);
                    if (data.status === 204) {
                        vm.showSuccessRegistration = true;
                        $timeout(function () {
                            vm.showSuccessRegistration = false;
                            $location.path('/');
                        }, 1000);
                    }
                    else {
                        vm.showFailureRegistration = true;
                        $timeout(function () {
                            vm.showFailureRegistration = false;
                        }, 1000);
                    }
                });
        };
    }]);
})();




