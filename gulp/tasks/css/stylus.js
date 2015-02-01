var config      = require('../../config'),
    gulp        = require('gulp'),
    browserSync = require('browser-sync');

// Get and render all .styl files recursively
gulp.task('stylus', function () {
    gulp.src(config.global.preprocessor.src)
        .pipe(stylus())
        .pipe(gulp.dest(config.global.preprocessor.dest))
        .pipe(browserSync.reload({stream:true}));
});
