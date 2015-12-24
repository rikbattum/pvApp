module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            //'app/bower_components/angular/angular.js',
            //'app/bower_components/angular/angular-loader.js',
            //'app/bower_components/angular-mocks/angular-mocks.js',
            //'app/bower_components/angular-route/angular-route.js',
            //'app/Components/mainController.js',
            //'app/Components/RegisterController.js',
            //'app/Components/ruiterController.js',
            //'app/Components/app.js',
            //'app/Components/general_js/*.js',
            //'app/view*/**/*.js',
            //'app/Views/*.js',
            //'app/Services/*.js',
            //'e2e-tests/*.js',
            //'Unit tests/*.js'
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular/angular-loader.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/Components/app.js',
            'app/Components/Home/mainController.js',
            'app/Components/Ruiters/ruiterController.js',
            'app/Components/Ruiters/ruiterController.js',
            'app/Register/registerDirective.js',
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
