var config      = require('../../config');

gulp.task('sass', function () {
  gulp.src(config.preprocessor.src)
  .pipe($.sass())
  .pipe($.size())
  .pipe(gulp.dest(config.preprocessor.dest))
  .pipe($.browserSync.reload({stream:true}));
});
