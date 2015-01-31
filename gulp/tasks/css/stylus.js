var config      = require('../../config'),
    gulp        = require('gulp');

// Get and render all .styl files recursively
gulp.task('stylus', function () {
    gulp.src(config.stylus.src)
        .pipe(stylus())
        .pipe(gulp.dest(config.stylus.dest));
});
