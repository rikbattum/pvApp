(function () {
    'use strict';

    angular.module('PVapp').controller('HorseController', ['horseService', '$location', '$log', '$timeout', function (horseService, $location, $log, $timeout) {
        var vm = this;
        vm.submitting = false;
        vm.showSuccessRegistration;
        vm.showFailureRegistration;
        vm.horsetlist = [];
        vm.selectedHorse = 'jouw paard';
        vm.waardeklasse = ['onbetaalbaar voor mij', '0-1.000', '1.000-2.000', '2.000-5.000', '5.000-10.000', '10.000-15.000', '15.000-20.000', '20.000-25.000', '25.000-30.000', '30.000-50.000', '50.000+'];
        vm.transfer = ['beschikbaar voor een nieuwe uitdaging', 'misschien beschikbaar in overleg', 'niet beschikbaar'];
        vm.shortnamepattern = '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$';
        vm.geboortedatumvalidatiepattern = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';

        vm.getHorses = function () {

            return horseService.getHorse()
                .then(function (horses) {
                    vm.horsetlist = horses;
                    console.log('horses succesfully retrieved');
                })
                .catch(function (error) {
                    console.log('error retrieving horses', error);
                });
        };

        function getRandomIntInclusive(min, max) {
            var x = Math.floor(Math.random() * (max - min + 1)) + min;
            var y = Math.floor(Math.random() * (max - min + 1)) + min;
            var z = Math.floor(Math.random() * (max - min + 1)) + min;
            var memberid = Math.floor(x * y / z);
            return (memberid);
        }

        vm.registerHorse = function () {
            vm.submitting = true;
            vm.newHorse.memberId = getRandomIntInclusive(0, 100000000000000);
            $log.log('this is horseId', vm.newHorse.memberId);

            horseService.postNewHorse(vm.newHorse)
                .then(function (data) {
                    $log.log('post succesfull' + data);
                    $log.log('this is ' + vm.newHorse);
                    vm.showSuccessRegistration = true;          // show succes message
                    $timeout(function () {
                        vm.showSuccessRegistration = false;     // disables succes message after timeout
                        $location.path('/');                    // routes to home on success after timeout
                    }, 1000)
                        .then(function (data) {
                            SessionService.initializeSession();
                        });
                }, function (error) {
                    $log.log('this is ', vm.newHorse);
                    vm.showFailureRegistration = true;
                    $timeout(function () {
                        vm.showFailureRegistration = false;     // show error message
                        $log.log(error);
                    }, 2000);
                    vm.submitting = false;                 // handles the button to become available again.
                });
        };
















        vm.setpassport = function setpassport() {
            $location.path('/paspoort');
        };
    }]);
})();

