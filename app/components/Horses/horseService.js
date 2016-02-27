(function () {
    'use strict';


    angular.module('PVapp').factory('horseService', ['$http', 'PVConfig', '$log', function ($http, PVConfig, $log) {

        var baseUrlHorse = PVConfig.baseUrl + 'horse';
        
        var getHorseDetails = function () {

            return $http({
                method: 'GET',
                url: baseUrlHorse,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .success(function (res) {
                    $log.debug('reached get statement Horses');
                })
                .error(function (error) {
                    $log.debug('error in getting horses', error);
                });
        };

        var postHorse = function () {

            return $http({
                method: 'POST',
                url: baseUrlHorse,
                headers: {}
            })
                .success(function (data, status) {
                    $log.debug('post horse succesfull');
                })
                .error(function (error, status) {
                    $log.debug('error posting horsre', error, status);

                });
        };

        var deleteHorseDetails = function () {
            return $http({
                method: 'DELETE',
                url: baseUrlHorse,
                headers: {}
            })
                .success(function (res) {
                    $log.debug('Horse succesfully deleted');
                })
                .error(function (error, status) {
                    $log.debug('error in deleting horse', error, status);
                });

        };

        var putHorse = function () {
            return $http({
                method: 'PUT',
                url: baseUrlHorse,
                headers: {}

            })
                .success(function (res) {
                    $log.debug('Horse succesfully updated');
                })
                .error(function (error, status) {
                    $log.debug('Error updating Horse', error, status);
                });
        };

        return {
            'postNewHorse': postHorse,
            'getHorse': getHorseDetails,
            'deleteHorse': deleteHorseDetails,
            'updateHorse': putHorse
        };

    }]);

})();
