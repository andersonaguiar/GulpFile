var config      = require('../../config');

gulp.task('uglifyJs', function() {
  return gulp.src(config.js.src)
  .pipe(plugin.uglify({
    outSourceMap: true
  }))
  .pipe(gulp.dest(config.js.dest))
  .pipe(plugin.size())
});