(function () {
    'use strict';


    angular.module('Session', []).factory('SessionService', ['memberService', 'PVConfig', '$http', '$log', function (memberService, PVConfig, $http, $log) {

        var session = {};
        var listenerArray = [];
        var baseUrlSession = PVConfig.baseUrl + 'session';

        var registerListener = function registerListener(listener) {
            listenerArray.push(listener);
        };

        var setMember = function setMember(memberId) {
            // retrieve member and put sessiondetails in Object.
            memberService.getMemberDetailsByMemID(memberId).then(function (member) {
                    $log.log('---> ', member);
                    session.id = member.data.id;
                    session.voornaam = member.data.voornaam;
                    session.achternaam = member.data.achternaam;
                    $log.log('---> session', session);
                })
                .catch(function (error) {
                    $log.log(error);
                });
        };

        var postSession = function postSession(session) {
            return $http.post(baseUrlSession, session)
                .then(function (sessiondetails) {
                    $log.log('----> session details posted ', sessiondetails);
                })
                .catch(function (error) {
                    $log.log(error);
                });
        };

        var getSessionDetails = function getsessionDetails() {
            return $http({
                method: 'GET',
                url: baseUrlSession,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .success(function (res) {
                    $log.log('reached get statement Session');
                })
                .error(function (error, status) {
                    $log.error('get status bad', error);
                });
        };

        var removeSessionDetails = function sessionDetails(id) {
            return $http.delete(id)
                .success(function (res) {
                    return res;
                    $log.log('session removed from id: ' + id);
                })
                .error(function (error, status) {
                    console.log(error);
                    $log.log('error removing session from id ' + id, error);
                });
        };

        return {
            'registerListener': registerListener,
            'setMember': setMember,
            'postSession': postSession,
            'getSessionDetails': getSessionDetails,
            'removeSessionDetails': removeSessionDetails,
        };
    }]);
})();
