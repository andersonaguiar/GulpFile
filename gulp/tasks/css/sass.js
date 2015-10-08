gulp.task('sass', () => {
  gulp.src(config.preprocessor.src)
    .pipe($.scssLint({
      'config': config.scssLint.conf,
    }))
    .pipe($.scssLint.failReporter())
    .pipe($.compass({
      sass: config.compass.src,
      css: config.compass.dest,
      style: 'compressed',
      debug: false
    }))
    .pipe($.sourcemaps.init())
    .pipe($.concat('main.min.css'))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.preprocessor.dest));
});


