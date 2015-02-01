var config      = require('../config'),
    gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync(config.browserSync);
});