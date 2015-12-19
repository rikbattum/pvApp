/**
 * Created by Gebruiker on 19-9-2015.
 */
'use strict';

describe('RegisterController tests', function () {

    beforeEach(module('PVapp'));

    var ctrl, MemberService, newMember;

    beforeEach(inject(function ($controller, memberService) {
        var spy = spyOn(memberService, 'postNewMember').and.callThrough();
        //var spy2 = spyOn(memberService, 'postNewMember').and.return(true);
        MemberService = memberService;
        ctrl = $controller('AanmeldController');

    }));

    it('should have a defined register controller', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have have called Post function', function () {
        ctrl.newMember = {
            'voornaam': 'Rik',
            'achternaam': 'van B',
            'inputemail13': 'rikbattum@hotmail.com',
            'geboortedatum': '1979-06-11T22:00:00.000Z',
            'plaatsnamen': 'Hilversum',
            'sportKlasse': 'L',
            'overMij': 'asd',
            'paard1': 'asd',
            'paard2': 'asd',
            'dressuur': true,
            'rijdenLocatie': true,
            'password': '12'
        };
        ctrl.registerMember();
        expect(MemberService).toBeDefined();
        expect(MemberService.postNewMember).toHaveBeenCalled();

    });

})
