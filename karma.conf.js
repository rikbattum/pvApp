module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            //'app/bower_components/angular/angular.js',
            //'app/bower_components/angular/angular-loader.js',
            //'app/bower_components/angular-mocks/angular-mocks.js',
            //'app/bower_components/angular-route/angular-route.js',
            //'app/components/mainController.js',
            //'app/components/RegisterController.js',
            //'app/components/ruiterController.js',
            //'app/components/app.js',
            //'app/components/general_js/*.js',
            //'app/view*/**/*.js',
            //'app/Views/*.js',
            //'app/Services/*.js',
            //'e2e-tests/*.js',
            //'Unit tests/*.js'
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular/angular-loader.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-ladda/dist/angular-ladda.min.js',
            'app/bower_components/ng-table/dist/ng-table.min.js',
            'app/components/app.js',
            'app/components/Home/mainController.js',
            'app/components/Ruiters/ruiterController.js',
            'app/components/Ruiters/ruiterController.js',
            'app/components/Horses/HorseController.js',
            'app/components/Horses/horseService.js',
            'app/components/Session/sessionService.js',
            'app/Register/registerDirective.js',
            'app/components/Member/RegisterController.js',
            'app/components/Member/memberService.js',
            'app/components/Home/nameNavBarService.js',
            'Tests/e2e-tests/*.js',
            'Tests/Unit tests/*.js'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
