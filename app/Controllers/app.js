(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var PVapp = angular.module('PVapp', [
        'ngRoute'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                    redirectTo: function () {
                        return '/myCarousel';
                    }
                })
            .when('/myCarousel', {
                templateUrl: 'app/Views/Home.html',
                controller: 'basicController',
                controllerAs: 'ctrlbasic'
            })
            .when('/register', {
                templateUrl: 'app/Views/Register.html'
                //controller: 'AanmeldController',
                //controllerAs: 'ctrlReg'
            })
            .when('/ruiters', {
                templateUrl: 'app/Views/Ruiters.html',
                controller: 'RuiterController',
                controllerAs: 'ctrlRuit'
            })
            .when('/zoekruiters', {
                templateUrl: 'app/Views/Zoekruiters.html',
                controller: 'RuiterController',
                controllerAs: 'ctrlRuit'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);


    PVapp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
})();
