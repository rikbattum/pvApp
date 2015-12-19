//(function () {
    'use strict';


    describe('RuiterController test', function () {

        var location = null;
        var Memberservice = null;
        var error;
        var ctrl;


        var mockMembers = [{
            'achternaam': 'Berendsen',
            'geboortedatum': '1978-07-25T00:00:00+02:00',
            'inputemail13': 'ebdeBerendsen@hotmail.com',
            'memberId': 6553859151407,
            'overMij': 'Leuke ruiter',
            'paard1': 'Hyros',
            'paard2': 'Mikcky',
            'paard3': 'Ariana',
            'password': '123',
            'plaatsnamen': 'Fijnaart',
            'sportKlasse': 'Z',
            'voornaam': 'Es'
        }
            , {
                'achternaam': 'Batsel',
                'geboortedatum': '1979-07-25T00:00:00+02:00',
                'inputemail13': 'rikbatsel@hotmail.com',
                'memberId': 4626086495563,
                'overMij': 'Paardenliefhebber, knuffelaar',
                'paard1': 'Mika',
                'paard2': 'Polly',
                'paard3': 'Rooney',
                'password': '123',
                'plaatsnamen': 'Bennekom',
                'sportKlasse': 'L',
                'voornaam': 'Rik'
            }];

// Mock services;

        function MemberserviceMock($q) {
            this.getMember = jasmine.createSpy('getMember').and.callFake(function () {
                return (error) ? $q.reject('promise rejectred') : $q.when(mockMembers);

            });

// Mock Application
            beforeEach(
                module('PVapp', function ($provide) {
                    $provide.service('Memberservice', MemberserviceMock);

                })
            );

//inject dependencies
            beforeEach(
                inject(function (_Memberservice_, _$location_, $controller) {
                    Memberservice = _Memberservice_;
                    location = _$location_;
                    ctrl = $controller('RuiterController');
                })
            );


            it('should have a defined register controller', function () {
                expect(x).toBeDefined();
            });

            it('should show all ruiters retrieved ', function () {


                expect(ctrl.Memberservice.getMember()).toEqual(mockMembers);

                console.log(ctrl.Memberservice.getMember);
            });

        }

    });
//})();

