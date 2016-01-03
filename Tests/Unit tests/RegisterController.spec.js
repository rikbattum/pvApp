(function () {
    'use strict';


    // Unit tests for Register Controller

    describe('RegisterController', function () {

        beforeEach(module('PVapp'));
        var registerController;
        var log;
        var testregistratieMember = [{
            'achternaam': 'van Battum',
            'dressuur': 'true',
            'eventing': 'true',
            'geboortedatum': 'Tue Jun 12 1979 00:00:00 GMT+0200 (West-Europa (zomertijd))',
            'inputemail13': 'rikbattum@hotmail.com',
            //'memberId': '1886002202084267',
            'mennen': 'true',
            'overMij': 'Ik ben een topper',
            'paard1': 'Estrella',
            'password': 'r9kkD',
            'plaatsnamen': 'Aagtekerke',
            'springen': 'true',
            'voltige': 'true',
            'voornaam': 'Rik',
            'wedstrijdsport': 'true'
        }];

        beforeEach(inject(function ($controller, $log) {
            registerController = $controller('RegisterController');
            log = $log;
            spyOn(registerController, 'registerMember').and.callThrough();
            spyOn(log, 'log').and.callThrough();
        }));

        it('should have a defined controller', function () {
            expect(registerController).toBeDefined();
        });
        it('should have the correct properties', function () {
            expect(registerController.submitting && registerController.showSuccessRegistration && registerController.showFailureRegistration).toBeFalsy();
            expect(registerController.submitting).toBeFalsy();
            expect(registerController.geslachtkeuze).toEqual(['Ruiter', 'Amazone']);
        });

        it('should have correct patterns for validation', function () {
            expect(registerController.shortnamepattern).toEqual('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$');
            expect(registerController.longnamepattern).toEqual('^[a-zA-Z][a-zA-Z0-9-_\.\\s]{1,30}$');
            expect(registerController.geboortedatumvalidatiepattern).toEqual('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))');
            expect(registerController.passwordvalidatiepattern).toEqual('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$');
        });

        it('should have plaatsnamen available', function () {

        });

        it('should be able to generate and log memberID', function () {
            registerController.newMember = testregistratieMember;
            registerController.registerMember(testregistratieMember);
            expect(log.log).toHaveBeenCalledWith('this is memberId', testregistratieMember.memberId);
        });

        it('should be able to post a full newMember', function () {


        });
    });
})();

