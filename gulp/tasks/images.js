var config          = require('../config'),
    gulp            = require('gulp'),
    changed         = require('gulp-changed'),
    imagemin        = require('gulp-imagemin'),
    browserSync     = require('browser-sync');

gulp.task('images', function() {
    return gulp.src(config.images.src)
        .pipe(changed(config.images.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.images.dest))
        .pipe(browserSync.reload({stream:true}));
});