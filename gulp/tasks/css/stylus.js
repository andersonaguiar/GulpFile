gulp.task('stylus', function () {
  gulp.src(config.preprocessor.src)
    .pipe($.stylus({
      use: $.nib(),
      compress: true
    }))
    .pipe($.sourcemaps.init())
    .pipe($.size())
    .pipe($.concat('main.min.css'))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.preprocessor.dest))
    .pipe($.browserSync.reload({stream:true}));
});
