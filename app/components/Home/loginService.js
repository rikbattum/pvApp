(function () {
    'use strict';


    angular.module('PVapp').factory('loginService', ['$http', '$log', function ($http, $log) {

        var hrefLogin = 'https://api.stormpath.com/v1/applications/4Gr9WFRFUspB5RM2KIr7WF';

        var login = function () {

            return $http({
                    method: 'POST',
                    url: hrefLogin,
                    headers: {
                        'Accept': 'application/json'
                    },
                    data: {}
                }
            )
                .success(function () {
                    $log.log('login succesvol');
                })
                .error(function (error) {
                    $log.error('login niet geslaagd: error = ', error);
                });
        };


        return {
            'login': login
        };
    }])
    ;


})
();


