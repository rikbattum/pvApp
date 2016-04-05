(function () {
    'use strict';

    // Unit tests for Register Controller

    describe('RegisterController', function () {

        beforeEach(module('PVapp'));

        var registerController;
        var log;
        var memberService;
        var sessionService;
        var timeout;
        var nameNaveBarService;
        var testregistratieMember = [{
            'achternaam': 'van Battum',
            'buitenritten': 'true',
            'drafsport': 'true',
            'dressuur': 'true',
            'endurance': 'true',
            'eventing': 'true',
            'fokken': 'true',
            'geboortedatum': 'Tue Jun 12 1979 00:00:00 GMT+0200 (West-Europa (zomertijd))',
            'inEnVerkoop': 'true',
            'inputemail13': 'rikbattum@hotmail.com',
            'id': '4526664079889',
            'mennen': 'true',
            'naturalHorsemanship': 'true',
            'overMij': 'Ik ben een topper',
            'paard1': 'Kyrane',
            'paard2': 'Michael',
            'paard3': 'Mika',
            'paard4': 'Donnie',
            'paard5': 'Yup',
            'paard6': 'Reno',
            'paard7': 'Elsa',
            'paard8': 'Elin',
            'paard9': 'Ollie',
            'paard10': 'Tristan',
            'paardenTrainen': 'true',
            'paardenVerzorgen': 'true',
            'password': 'G4hj',
            'plaatsnamen': 'Hilversum',
            'polo': 'true',
            'rensport': 'true',
            'rijdenLocatie': 'true',
            'ringsteken': 'true',
            'rodeo': 'true',
            'samenTrainen': 'true',
            'showrijden': 'true',
            'springen': 'true',
            'voedingGezondheid': 'true',
            'voltige': 'true',
            'voorlichting': 'true',
            'voornaam': 'Rik',
            'vossenjacht': 'true',
            'wedstrijdsport': 'true',
            'western': 'true'
        }];


        beforeEach(inject(function ($controller, $log, $timeout, _memberService_, _sessionService_, _nameNavBarService_) {
            registerController = $controller('RegisterController');
            log = $log;
            timeout = $timeout;
            memberService = _memberService_;
            sessionService = _sessionService_;
            nameNaveBarService = _nameNavBarService_;
            spyOn(registerController, 'registerMember').and.callThrough();
            spyOn(log, 'log').and.callThrough();
            spyOn(memberService, 'postNewMember').and.callThrough();
        }));

        it('should have access to the session Service', function () {
            expect(sessionService).toBeDefined();
        });

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
            expect(registerController.plaatsnamen).toContain('Hilversum');
        });

        it('should be able to generate and log memberID', function () {
            registerController.newMember = testregistratieMember;
            registerController.registerMember(testregistratieMember);
            expect(log.log).toHaveBeenCalledWith('this is memberId', testregistratieMember.id);
        });

        it('should be able to post a full newMember', function () {
            registerController.newMember = testregistratieMember;
            registerController.registerMember(testregistratieMember);
            expect(memberService.postNewMember).toHaveBeenCalledWith(testregistratieMember);
        });
    });

    //specific section for handling result of memberService

    describe('RegisterController handling memberService', function () {

        beforeEach(module('PVapp'));
        var registerController;
        var log;
        var memberService;
        var $httpBackend;
        var $rootScope;
        var $timeout;
        var location;
        var nameNavBarService;
        var testregistratieMember = [{
            achternaam: 'van Battum',
            buitenritten: true,
            drafsport: true,
            dressuur: true,
            endurance: true,
            eventing: true,
            fokken: true,
            geboortedatum: 'Tue Jun 12 1979 00:00:00 GMT+0200 (West-Europa (zomertijd))',
            inEnVerkoop: 'true',
            inputemail13: 'rikbattum@hotmail.com',
            memberId: 4526664079889,
            mennen: true,
            naturalHorsemanship: true,
            overMij: 'Ik ben een topper',
            paard1: 'Kyrane',
            paard2: 'Michael',
            paard3: 'Mika',
            paard4: 'Donnie',
            paard5: 'Yup',
            paard6: 'Reno',
            paard7: 'Elsa',
            paard8: 'Elin',
            paard9: 'Ollie',
            paard10: 'Tristan',
            paardenTrainen: true,
            paardenVerzorgen: true,
            password: 'G4hj',
            plaatsnamen: 'Hilversum',
            polo: true,
            rensport: true,
            rijdenLocatie: true,
            ringsteken: true,
            rodeo: true,
            samenTrainen: true,
            showrijden: true,
            springen: true,
            voedingGezondheid: true,
            voltige: true,
            voorlichting: true,
            voornaam: 'Rik',
            vossenjacht: true,
            wedstrijdsport: true,
            western: true
        }];

        beforeEach(inject(function ($controller, $log, _memberService_, _$httpBackend_, _$rootScope_, _$timeout_, $location, _nameNavBarService_) {
            registerController = $controller('RegisterController');
            log = $log;
            memberService = _memberService_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            location = $location;
            nameNavBarService = _nameNavBarService_;
            spyOn(location, 'path').and.returnValue('/');
        }));

        it('should be able to handle a succesfull registration and pass object', function () {
            var successFn = jasmine.createSpy('successFn');
            var failureFn = jasmine.createSpy('failureFn');
            registerController.newMember = testregistratieMember;
            $httpBackend.expectPOST('http://localhost:8080/pvAppApi/paardenvriendjes/member').respond(204);
            memberService.postNewMember(testregistratieMember)
                .then(successFn)
                .catch(failureFn);
            $httpBackend.flush();
            $rootScope.$digest();
            expect(registerController.newMember).toEqual(testregistratieMember);
            expect(successFn).toHaveBeenCalled();
            expect(failureFn).not.toHaveBeenCalled();
            expect(registerController.newMember).toEqual(testregistratieMember);
        });

        it('should be able to show a temporary success message', function () {
            registerController.alertVisible = false;
            registerController.newMember = testregistratieMember;
            spyOn(registerController, 'registerMember').and.callThrough();
            registerController.registerMember(testregistratieMember);
            $httpBackend.expectPOST('http://localhost:8080/pvAppApi/paardenvriendjes/member').respond(204);
            $httpBackend.whenPOST('http://localhost:8080/pvAppApi/paardenvriendjes/horse').respond(204);
            $httpBackend.whenPOST('http://localhost:8080/pvAppApi/paardenvriendjes/session').respond(204);
            $httpBackend.expectGET(/member\/.*/).respond(204);
            $httpBackend.expectGET('http://localhost:8080/pvAppApi/paardenvriendjes/session').respond(204);
            $httpBackend.flush();
            $rootScope.$digest();
            expect(registerController.showSuccessRegistration).toBeTruthy();
            expect(registerController.showFailureRegistration).toBeFalsy();
            $timeout.flush();
            expect(registerController.showSuccessRegistration).toBeFalsy();
            expect(registerController.showFailureRegistration).toBeFalsy();
        });

        it('should be able to switch to home after registration', function () {
            //registerController = $rootScope.$new();
            registerController.alertVisible = false;
            registerController.newMember = testregistratieMember;
            spyOn(registerController, 'registerMember').and.callThrough();
            registerController.registerMember(testregistratieMember);
            $httpBackend.expectPOST('http://localhost:8080/pvAppApi/paardenvriendjes/member').respond(204);
            $httpBackend.whenPOST('http://localhost:8080/pvAppApi/paardenvriendjes/horse').respond(204);
            $httpBackend.whenGET('http://localhost:8080/pvAppApi/paardenvriendjes/member/').respond(204);
            $httpBackend.whenPOST('http://localhost:8080/pvAppApi/paardenvriendjes/session').respond(204);
            $httpBackend.expectGET(/member\/.*/).respond(204);
            $httpBackend.expectGET('http://localhost:8080/pvAppApi/paardenvriendjes/session').respond(204);
            $httpBackend.flush();
            $rootScope.$digest();
            $timeout.flush();
            expect(location.path).toHaveBeenCalledWith('/');
        });

        it('should be able to handle a failure registration', function () {
            var successFn = jasmine.createSpy('successFn');
            var failureFn = jasmine.createSpy('failureFn');
            registerController.newMember = testregistratieMember;
            $httpBackend.expectPOST('http://localhost:8080/pvAppApi/paardenvriendjes/member').respond(500);
            memberService.postNewMember(testregistratieMember)
                .then(successFn)
                .catch(failureFn);
            $httpBackend.flush();
            $rootScope.$digest();
            expect(successFn).not.toHaveBeenCalled();
            expect(failureFn).toHaveBeenCalled();
        });

        it('should be able to show a temporary failure message', function () {
            registerController.alertVisible = false;
            registerController.newMember = testregistratieMember;
            spyOn(registerController, 'registerMember').and.callThrough();
            registerController.registerMember(testregistratieMember);
            $httpBackend.expectPOST('http://localhost:8080/pvAppApi/paardenvriendjes/member').respond(500);
            $httpBackend.flush();
            $rootScope.$digest();
            expect(registerController.showSuccessRegistration).toBeFalsy();
            expect(registerController.showFailureRegistration).toBeTruthy();
            $timeout.flush();
            expect(registerController.showSuccessRegistration).toBeFalsy();
            expect(registerController.showFailureRegistration).toBeFalsy();
        });
    });
})();


