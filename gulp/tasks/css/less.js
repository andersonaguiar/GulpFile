var config      = require('../../config'),
    gulp        = require('gulp'),
    less        = require('gulp-less'),
    path        = require('path');

gulp.task('less', function () {
  gulp.src(config.global.preprocessor.src)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(config.global.preprocessor.dest));
});