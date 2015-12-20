var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('unit', function () {
    return gulp.src('Unit tests/*.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine());
});