(function () {
    'use strict';

    angular.module('PVapp').controller('HorseController', ['horseService', '$location', function (horseService, $location) {
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


        vm.registerHorse = function registerHorse() {
            alert('registered');
        };

        vm.setpassport = function setpassport() {
            $location.path('/paspoort');
        };
    }]);
})();

