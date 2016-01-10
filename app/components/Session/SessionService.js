(function () {
    'use strict';


    angular.module('Session', []).service('SessionService', ['memberService', function (memberService) {

        var sessiondetails = [];
        var listenerArray = [];
        var memberDetails;

        return {
            registerListener: function registerListener(listener) {
                listenerArray.push(listener);
            },
            initializeSession: function initializeSession() {
                sessiondetails = [];
                memberDetails = memberService.getMember(1);
                sessiondetails.push(memberDetails);
            },
            addSessionDetails: function addSessionDetails(runningState) {
                sessiondetails.push(runningState);
            },
            getSessionDetails: function getsessionDetails() {
                return sessiondetails;
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
