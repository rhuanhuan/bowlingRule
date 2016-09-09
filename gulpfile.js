var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

// gulp.task('default', function() {
//     // 将你的默认的任务代码放在这
// });

gulp.task('Bowling', function() {
    // gulp.src('./spec/support/jasmine.json')
    gulp.src('./spec/jasmine_examples/*Spec.js')
        .pipe(jasmine())
});
