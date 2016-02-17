(function () {
    'use strict';

    angular.module('PVapp').controller('MemberPageController', ['$log', 'SessionService', 'memberService', function ($log, SessionService, memberService) {

        var vm = this;
        vm.memberID = '';
        $log.log('initialized controller MemberPage');


        vm.getProfile = function () {
            console.log('inside getProfile');
            console.log('sessionservice getSession Details >> ', SessionService.getSessionDetails());

            var deteminemeber = function () {
            SessionService.getSessionDetails()
                .then (function (sessiondetails) {
                    vm.memberID = sessiondetails.id;
                    console.log (sessiondetails);
                })
                .catch (function (error) {
                    console.log (error);
                })

            }

            return memberService.getMemberDetailsByMemID(SessionService.getSessionDetails())
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

