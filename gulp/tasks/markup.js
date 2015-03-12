var config          = require('../config');

gulp.task('markup', function() {
  return gulp.src(config.markup.src)
  .pipe(gulp.dest(config.markup.dest))
  .pipe(plugin.browserSync.reload({stream:true}));
});