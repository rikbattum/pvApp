(function () {
    'use strict';

// This service should handle all front-end CRUD operations for the Jax-RS member service.
    angular.module('PVapp')
        .factory('memberService', ['$http', 'PVConfig', '$log', function ($http, PVConfig, $log) {

            var baseUrlMember = PVConfig.baseUrl + 'members';

            var getMemberDetails = function (res) {

                return $http({
                    method: 'GET',
                    url: baseUrlMember,
                    headers: {
                        'Accept': 'application/json',
                    'Authorization': 'Basic user:secret'
                    },
                    withCredentials: true
                })
                    .success(function (res) {
                        $log.log('reached get statement Members');
                    })
                    .error(function (error, status) {
                        $log.error('get status bad', error);
                    });
            };


            var getIndividualMemberDetails = function (id, res) {

                return $http({
                    method: 'GET',
                    url: baseUrlMember + '/' + id,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .success(function (res) {
                        $log.log('reached get statement of individual Member');
                    })
                    .error(function (error, status) {
                        $log.error('get status bad', error);
                    });
            };

            var getIndividualMemberDetailsByMemberID = function (id, res) {

                return $http({
                    method: 'GET',
                    url: baseUrlMember + '/' + id,
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Basic user:secret'
                    },
                    withCredentials: true
                })
                    .success(function (res) {
                        $log.log('reached get statement of individual Member by memberID');
                    })
                    .error(function (error, status) {
                        $log.error('get status bad', error);
                    });
            };



            var postMember = function (newMember) {

                return $http.post(baseUrlMember, newMember)
                    .success(function (data, status) {
                        $log.log('Post success, status: ', data, status);
                    })
                    .error(function (error, status, x) {
                        console.log('This is the error:' + error, status, x);
                    });
            };


            var updatetMember = function () {

                return $http({
                    method: 'PUT',
                    url: baseUrlMember,
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
                    url: baseUrlMember,
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
                'getMemberDetails': getIndividualMemberDetails,
                'getMemberDetailsByMemID': getIndividualMemberDetailsByMemberID,
                'updateMember': updatetMember
            };
        }]);
})();