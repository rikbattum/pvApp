(function () {
    'use strict';


    angular.module('Session', []).service('SessionService', ['memberService', function (memberService) {

        var sessiondetails = [];
        var listenerArray = [];

        return {
            registerListener: function registerListener(listener) {
                listenerArray.push(listener);
            },
            initializeSession: function initializeSession(memberId) {
                memberService.getMemberDetailsByMemID(memberId)
                    .then(function (member) {
                        console.log('----> member details retrieved ', member);
                        sessiondetails.push(member.data.id);
                        sessiondetails.push(member.data.voornaam);
                        sessiondetails.push(member.data.achternaam);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            addSessionDetails: function addSessionDetails(runningState) {
                sessiondetails.push(runningState);
            },
            getSessionDetails: function getsessionDetails() {
                return sessiondetails;
            },
            getMemberId: function getMemberId() {
                return sessiondetails[0];
                console.log (sessiondetails);
            },
            removeSessionDetails: function sessionDetails(array, key) {
                var arraylocation = array.indexOf(key);
                if (arraylocation !== -1) {
                    array.splice(arraylocation, 1);
                }
                return array;
            },
            removeSession: function removeSesion() {
                sessiondetails = [];
            }
        };
    }
    ]);
})();
