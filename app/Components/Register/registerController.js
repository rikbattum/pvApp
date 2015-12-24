(function () {
    'use strict';

    angular.module('PVapp').controller('registerController', ['memberService', '$timeout', '$location', function (memberService, $timeout, $location) {

        var vm = this;
        vm.submitting = false;

        function doLog() {
            console.log('running contoller');
        }

        doLog();

        function getRandomIntInclusive(min, max) {
            var x = Math.floor(Math.random() * (max - min + 1)) + min;
            var y = Math.floor(Math.random() * (max - min + 1)) + min;
            var z = Math.floor(Math.random() * (max - min + 1)) + min;
            var memberid = Math.floor(x * y / z);
            return (memberid);
        }

        vm.registerMember = function () {
            console.log('inside registgerMember', vm.newMember);
            vm.newMember.memberId = getRandomIntInclusive(0, 100000000000000);
            console.log('this is memberId', vm.newMember.memberId);

            memberService.postNewMember(vm.newMember)
                .then(function (data) {
                    vm.submitting = true;
                    console.log('post succesfull', data, data.status);

                    if (data.status === 204) {
                        console.log('status afgevangen');
                        vm.showSuccessRegistration = true;
                        vm.submitting = false;
                        $timeout(function () {
                            vm.showSuccessRegistration = false;
                            console.log('ERROR');
                            $location.path('/');
                        }, 4000);
                    }
                    else {
                        vm.showFailureRegistration = true;
                        vm.submitting = false;
                        $timeout(function () {
                            vm.showFailureRegistration = false;
                        }, 4000);
                    }
                })
                .then(function (error) {
                    console.log('error' + error);
                    vm.submitting = false;
                });
        };
    }]);
})();




