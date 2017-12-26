runSequence = require('run-sequence');
var connect = require('gulp-connect');


var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['connect']);
