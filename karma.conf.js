module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            //'app/bower_components/angular/angular.js',
            //'app/bower_components/angular/angular-loader.js',
            //'app/bower_components/angular-mocks/angular-mocks.js',
            //'app/bower_components/angular-route/angular-route.js',
            //'app/Controllers/MainController.js',
            //'app/Controllers/RegisterController.js',
            //'app/Controllers/RuiterController.js',
            //'app/Controllers/app.js',
            //'app/Controllers/general_js/*.js',
            //'app/view*/**/*.js',
            //'app/Views/*.js',
            //'app/Services/*.js',
            //'e2e-tests/*.js',
            //'Unit tests/*.js'
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular/angular-loader.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/Controllers/app.js',
            'app/Controllers/MainController.js',
            'app/Controllers/RegisterController.js',
            'app/Controllers/RuiterController.js',
            'app/Services/*.js',
            'e2e-tests/*.js',
            'Unit tests/*.js'],

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
