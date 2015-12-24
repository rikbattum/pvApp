(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var PVapp = angular.module('PVapp', [
        'ngRoute', 'angular-ladda'
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
                    templateUrl: 'app/Components/Home/home.html',
                    controller: 'basicController',
                    controllerAs: 'ctrlbasic'
                })
                .when('/register', {
                    templateUrl: 'app/Components/Register/register.html'
                })
                .when('/ruiters', {
                    templateUrl: 'app/Components/Ruiters/ruiters.html',
                    controller: 'RuiterController',
                    controllerAs: 'ctrlRuit'
                })
                .when('/zoekruiters', {
                    templateUrl: 'app/Components/Ruiters/zoekRuiters.html',
                    controller: 'RuiterController',
                    controllerAs: 'ctrlRuit'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
        .constant('PVConfig', {
            'baseUrl': 'http://localhost:8080/pvAppApi/paardenvriendjes/'
        });


    PVapp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
})();
