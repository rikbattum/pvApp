(function () {
    'use strict';


    angular.module('PVapp').directive('memberOverviewLongDirective', function () {
        return {
            restrict: 'AE',
            scope: {ruiters: '='},
            templateUrl: 'app/components/Member/memberOverviewLong.html',
            link: function (scope, element, attrs) {
                element.bind('click', function() {
                    console.log('Click: ' + attrs);
                });
            }
        };
    });
})();
