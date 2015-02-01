var config      = require('../../config'),
    gulp        = require('gulp'),
    sass        = require('gulp-sass');
 
gulp.task('sass', function () {
    gulp.src(config.global.preprocessor.src)
        .pipe(sass())
        .pipe(gulp.dest(config.global.preprocessor.dest));
});