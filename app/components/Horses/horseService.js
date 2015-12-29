(function () {
    'use strict';


    angular.module('PVapp').
    factory('horseService', function ($http) {


        var getHorseDetails = function () {

            return $http({
                method: 'GET',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.horse',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .success(function (res) {
                    console.log('reached get statement Horses');
                })
                .
                error(function (error) {
                    console.log('error in getting horses', error);
                });
        };

        var postHorse = function () {

            return $http({
                method: 'POST',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.horse',
                headers: {}
            })
                .success(function (data, status) {
                    console.log('post horse succesfull');
                })
                .error(function (error, status) {
                    console.log('error posting horsre', error, status);

                });
        };

        var deleteHorseDetails = function () {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.horse',
                headers: {},
            })
                .success(function (res) {
                    console.log('Horse succesfully deleted');
                })
                .error(function (error, status) {
                    console.log('error in deleting horse', error, status);
                });

        };

        var putHorse = function () {
            return $http({
                method: 'PUT',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.horse',
                headers: {}

            })
                .success(function (res) {
                    console.log('Horse succesfully updated');
                })
                .error(function (error, status) {
                    console.log('Error updating Horse', error, status);
                });
        };

        return {
            'postNewHorse': postHorse,
            'getHorse': getHorseDetails,
            'deleteHorse': deleteHorseDetails,
            'updateHorse': putHorse
        };

    });

})();
