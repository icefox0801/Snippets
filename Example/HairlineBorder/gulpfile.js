var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var open = require('gulp-open');

gulp.task('css', function () {
    gulp.src('./scss/style.scss').
        pipe(sass()).
        pipe(csscomb()).
        pipe(gulp.dest('./css'));
});

gulp.task('default', ['css'], function () {
    gulp.src('./index.html').
        pipe(open());
});