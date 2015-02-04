var config      = require('../../config'),
    gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    size        = require('gulp-filesize');

gulp.task('uglifyJs', function() {
    return gulp.src(config.js.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.js.dest))
        .pipe(size());
});