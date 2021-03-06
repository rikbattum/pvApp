(function () {
    angular.module('PVapp').directive('loginDirective', [function () {
        return {
            restrict: 'EA',
            scope: true,
            templateUrl:'/view/Register.html',
            link: function ($scope, $element, $attrs) {
                function getRandomIntInclusive(min, max) {
                    var x = Math.floor(Math.random() * (max - min + 1)) + min;
                    var y = Math.floor(Math.random() * (max - min + 1)) + min;
                    var z = Math.floor(Math.random() * (max - min + 1)) + min;
                    var memberid = Math.floor(x * y / z);
                    return (memberid);
                }

                $scope.registerMember = function () {
                    console.log('inside registgerMember', vm.newMember);
                    vm.newMember.memberId = getRandomIntInclusive(0, 100000000000000);
                    console.log('this is memberId', vm.newMember.memberId);

                    memberService.postNewMember(vm.newMember)
                        .then(function (data) {
                            console.log('post succesfull', data, data.status);
                            if (data.status === 204) {
                                console.log('status afgevangen');
                                vm.showSuccessRegistration = true;
                                $timeout(function () {
                                    vm.showSuccessRegistration = false;
                                    console.log('ERROR');
                                    $location.path('/');
                                }, 4000);
                            }
                            else {
                                vm.showFailureRegistration = true;

                                $timeout(function () {
                                    vm.showFailureRegistration = false;

                                }, 4000);
                            }
                        })
                        .then(function (error) {
                            console.log('error' + error);
                        });
                    console.log('this is the directive working');
                };
            }
        };
    }]);
})();
