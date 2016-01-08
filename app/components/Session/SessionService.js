(function () {
    'use strict';


    angular.module('Session', []).service('SessionService', [function () {

        var sessiondetails = [];

        return {
            initializeSession: function initializeSession() {
                sessiondetails = [];
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
