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

gulp.task('connect', function() {
  connect.server();
});

gulp.task('w', function () {
  gulp.watch(['assets/stylus/**/*.styl'], ['stylus']);
});

// Use nib
// Require nib
var nib = require('nib');
// either a String or an Array
gulp.task('nib', function () {
  gulp.src('assets/stylus/main.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('assets/css'));
});