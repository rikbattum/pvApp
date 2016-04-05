(function () {
    'use strict';


    angular.module('PVapp').factory('nameNavBarService', ['sessionService', '$log', function (sessionService, $log) {

        var nameInsession;

        var setNameInNavbar = function setNameInNavbar(memberID) {
            if (memberID === undefined) {
                nameInsession = 'Member';
            }
            else {
                sessionService.getSessionDetails(memberID)
                    .then(function (session) {
                        console.log('this is specific navbar session object' + session);
                        if (session.data[0].voornaam === undefined) {
                            nameInsession = 'Member';
                            $log.debug('---> session for name', session);
                        }
                        else {
                            nameInsession = session.data[0].voornaam;
                            $log.debug('---> session for name', session);
                        }
                    })
                    .catch(function (error) {
                        $log.debug('error while retrieving session details: ', error);
                    });
            }
        };

        var getNameInNavbar = function getNameInNavbar() {
            if (nameInsession === undefined) {
                nameInsession = 'Member';
            }
            console.log('---> will deliver name in session', nameInsession);
            return (nameInsession);

        };

        return {
            setNameInNavbar: setNameInNavbar,
            getNameInNavbar: getNameInNavbar
        };
    }
    ]);
})();
