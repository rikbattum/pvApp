'use strict';

// This service should handle all front-end CRUD operations for the Jax-RS member service.
angular.module('PVapp')
    .factory('memberService', function ($http) {


        var getMemberDetails = function (res) {

            return $http({
                method: 'GET',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.member',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .success(function (res) {
                    console.log('reached get statement Members');
                })
                .error(function (error, status) {
                    console.error('get status bad', error);
                });
        };

        var postMember = function (newMember) {

            return $http.post('http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.member', newMember)
                .success(function (data, status) {
                    console.log('reached post statement');
                })
                .error(function (error, status, x) {
                    console.log('This is the error:' + error, status, x);
                });
        };


        var updatetMember = function () {

            return $http({
                method: 'PUT',
                url: "http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.member",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .success(function (data, status, headers, config) {
                    return data + status;
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status);
                    return data + status;
                });

        };

        var deleteMemberDetails = function () {

            return $http({
                method: 'DELETE',
                url: 'http://localhost:8080/nl.paardenvriendjes2018/webresources/fjvb.nl.paardenvriendjes2018.member',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .success(function (res) {
                    return res;
                })
                .error(function (error, status) {
                    console.log(error);
                });

        };

        return {
            'postNewMember': postMember,
            'deleteMember': deleteMemberDetails,
            'getMember': getMemberDetails,
            'updateMember': updatetMember
        };
    });