//describe('loginDirective tests', function () {
//
//    //   beforeEach(module('PVapp'));
//
//    var ctrl, element, MemberService, scope, template, $compile, $rootScope, isolateElemScope;
//
//
//    beforeEach(function () {
//
//        injector = angular.injector(['PVapp']);
//
//        injector.invoke(function ($rootScope, $compile) {
//            // Get a new scope
//            scope = $rootScope.$new();
//            element = $compile('<login-directive></login-directive>')(scope);
//            scope.$apply();
//            isolateElemScope = element.scope();
//        });
//    });
//
//
//    it('should be true', inject(function () {
//        scope.$on('loginDirective', function() {
//            console.log('isolateElemScope', isolateElemScope);
//            expect(isolateElemScope.test).toBeDefined();
//
//        });
//    }));
//
//
//
//    it('should have a defined controller', inject(function () {
//        //   expect(ctrl).toBeDefined();
//        //    expect().toBeDefined();
//    }));
//    //
//    //beforeEach(inject(function (memberService) {
//    //    var spy;
//    //    MemberService = memberService;
//    //    spy = spyOn(memberService, 'postNewMember').and.callThrough();
//    //}));
//    //
//    //
//    //it('should have have called Post function', function (MemberServive) {
//    //    ctrl.newMember = {
//    //        'voornaam': 'Rik',
//    //        'achternaam': 'van B',
//    //        'inputemail13': 'rikbattum@hotmail.com',
//    //        'geboortedatum': '1979-06-11T22:00:00.000Z',
//    //        'plaatsnamen': 'Hilversum',
//    //        'sportKlasse': 'L',
//    //        'overMij': 'asd',
//    //        'paard1': 'asd',
//    //        'paard2': 'asd',
//    //        'dressuur': true,
//    //        'rijdenLocatie': true,
//    //        'password': '12'
//    //    };
//    //
//    //    ctrl.registerMember();
//    //    expect(MemberService).toBeDefined();
//    //    expect(MemberService.postNewMember).toHaveBeenCalled();
//
//
//});
//
