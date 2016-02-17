(function () {
    'use strict';


    angular.module('PVapp').factory('NameNavBarService', ['SessionService', '$log', function (SessionService, $log) {

        var nameInsession;

        var setNameInNavbar = function setNameInNavbar(memberID) {
            SessionService.getSessionDetails(memberID)
                .then(function (session) {
                    if (session.data[0].voornaam === undefined) {
                        nameInsession = 'Member';
                        $log.log('---> session for name', session);
                    }
                    else {
                        nameInsession = session.data[0].voornaam;
                        $log.log('---> session for name', session);
                    }
                })
                .catch(function (error) {
                    $log('error while retrieving session details: ', error);
                });
        };


        var getNameInNavbar = function getNameInNavbar() {
            console.log ('---> will deliver name in session', nameInsession)
            return (nameInsession);
        };

        return {
            setNameInNavbar: setNameInNavbar,
            getNameInNavbar: getNameInNavbar
        }
            ;

    }]);


})();
