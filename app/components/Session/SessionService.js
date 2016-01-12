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
            initializeSession: function initializeSession(memberId) {
                sessiondetails = [];
                memberDetails = memberService.getMemberDetailsByMemID(memberId)
                    .then(function (memberdetailsRetrieved) {
                        memberDetails = memberdetailsRetrieved;
                        sessiondetails.push(memberDetails);
                        console.log(sessiondetails);
                        console.log(sessiondetails.data.voornaam);
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
