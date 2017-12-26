var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('js', function () {
    gulp.src('./app/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);