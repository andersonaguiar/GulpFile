var 
    gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    connect = require('gulp-connect');

// Get one .styl file and render
gulp.task('one', function () {
    gulp.src('assets/stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets/css'));
});

// Get and render all .styl files recursively
gulp.task('stylus', function () {
    gulp.src('assets/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('w', function () {
    gulp.watch(['assets/stylus/**/*.styl'], ['stylus']);
});

