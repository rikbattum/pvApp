(function () {
    'use strict';


    angular.module('PVapp').directive('memberOverviewDirective', function () {
        return {
            restrict: 'AE',
            scope: {ruiters: '='},
            templateUrl: 'app/components/Member/memberOverview.html',
            link: function (scope, element, attrs) {
                element.bind('click', function() {
                    console.log('Click: ' + attrs);
                });
            }
        };
    });
})();
