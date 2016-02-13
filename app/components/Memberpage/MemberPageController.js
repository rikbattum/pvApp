(function () {
    'use strict';

    angular.module('PVapp').controller('MemberPageController', ['$log', 'SessionService', 'memberService', function ($log, SessionService, memberService) {

        var vm = this;
        vm.member = {};
        $log.log('initialized controller MemberPage');


        vm.getProfile = function () {
            console.log('inside getProfile');
            console.log('sessionservice getSession Details >> ', SessionService.getSessionDetails());
            console.log('id --->', SessionService.getMemberId());

            return memberService.getMemberDetailsByMemID(SessionService.getMemberId())
                .then(function (member) {
                    console.log('get is ok', member);
                    vm.member = member;
                })
                .catch(function (error) {
                    console.log('get is error', error);
                });
        };
        vm.getProfile();
    }]);
})();

