(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var PVapp = angular.module('PVapp', [
        'ngRoute', 'angular-ladda', 'ngTable', 'Session'
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
                    templateUrl: 'app/components/Home/new_home.html ',
                    controller: 'basicController',
                    controllerAs: 'ctrlBasic'
                })
                .when('/register', {
                    template: '<register-directive></register-directive>'
                })
                .when('/ruiters', {
                    templateUrl: 'app/components/Ruiters/ruiters.html',
                    controller: 'RuiterController',
                    controllerAs: 'ctrlRuit'
                })
                .when('/zoekruiters', {
                    templateUrl: 'app/components/Ruiters/zoekRuiters.html',
                    controller: 'RuiterController',
                    controllerAs: 'ctrlRuit'
                })
                .when('/paarden', {
                    templateUrl: 'app/components/Horses/registerHorse.html',
                    controller: 'HorseController',
                    controllerAs: 'ctrlHorse'
                })
                .when('/memberpage', {
                    templateUrl: 'app/components/Memberpage/memberpage.html',
                    controller: 'MemberPageController',
                    controllerAs: 'ctrlMP'
                })
                .when('/paspoort', {
                    templateUrl: 'app/components/Horses/paspoort.html',
                    controller: 'PaspoortController',
                    controllerAs: 'ctrlPP'
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
