(function () {
    'use strict';


    describe('HorseController', function () {

        var ctrl, location, horsService;

        beforeEach(module('PVapp'));

        beforeEach(inject(function ($controller, _$location_, horseService) {
            ctrl = $controller('HorseController');
            horsService = horseService;
            location = _$location_;

        }));

        it('should have a defined controller', function () {
            expect(ctrl).toBeDefined();
        });

        it('should have data for the ng-repeats', function () {
            expect(ctrl.waardeklasse).toBeDefined();
            expect(ctrl.transfer).toBeDefined();
        });

        it('should have validation patters', function () {
            expect(ctrl.shortnamepattern).toBe('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$');
            expect(ctrl.geboortedatumvalidatiepattern).toBe('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))');
        });

    });
})();

