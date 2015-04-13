var config      = require('../../config');

gulp.task('sass', function() {
  gulp.src(config.preprocessor.src)
  // need to install with gem
  .pipe($.scssLint({
    'config': config.scssLint.conf,
  }))
  .pipe($.scssLint.failReporter())
  // need to install with gem
  .pipe($.compass({
    sass: config.compass.src,
    css: config.compass.dest,
    style: 'compressed',
    debug: false
  }))
  .pipe($.sourcemaps.init())
  .pipe($.sourcemaps.write('./'))
  .pipe(gulp.dest(config.preprocessor.dest));
});
