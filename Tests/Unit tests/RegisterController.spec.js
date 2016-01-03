(function () {
    'use strict';


    // Unit tests for Register Controller

    describe('RegisterController', function () {

        beforeEach(module('PVapp'));
        var registerController;
        var log;
        var membService;
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

        beforeEach(inject(function ($controller, $log, memberService) {
            registerController = $controller('RegisterController');
            log = $log;
            membService = memberService;
            spyOn(registerController, 'registerMember').and.callThrough();
            spyOn(log, 'log').and.callThrough();
            spyOn(membService, 'postNewMember').and.callThrough();
        }));

        it('should have a defined controller', function () {
            expect(registerController).toBeDefined();
        });
        it('should have the correct properties', function () {
            expect(registerController.submitting && registerController.showSuccessRegistration && registerController.showFailureRegistration).toBeFalsy();
            expect(registerController.submitting).toBeFalsy();
            expect(registerController.geslachtkeuze).toEqual(['Ruiter', 'Amazone']);
        });

        it('should have correct patterns for validation when registring', function () {
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
            registerController.newMember = testregistratieMember;
            registerController.registerMember(testregistratieMember);
            expect(membService.postNewMember).toHaveBeenCalledWith(testregistratieMember);
        });
    });

    //specific section for handling result of memberService

    describe('RegisterController handling memberService', function () {

        beforeEach(module('PVapp'));
        var registerController;
        var log;
        var membService;
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

        beforeEach(inject(function ($controller, $log, memberService) {
            registerController = $controller('RegisterController');
            log = $log;
            membService = memberService;
            spyOn(membService, 'postNewMember').and.callFake(function () {
                return 'data.status === 204';
            });
        }));


        it('should be able to handle a succesfull registration', function () {


            var successFn = jasmine.createSpy('successFn');
            var failureFn = jasmine.createSpy('failureFn');
            //
            //registerController.newMember = testregistratieMember;
            //registerController.registerMember(testregistratieMember);
            .then(successFn)
                .catch(failureFn);


            $rootScope.$digest();
            $httpBackend.flush();

// For failure case test, switch these!
            expect(successFn).toHaveBeenCalled();
            expect(failureFn).not.toHaveBeenCalled();




            ct
            expect(membService.postNewMember).toHaveBeenCalledWith(testregistratieMember);

        });
    });

})();


