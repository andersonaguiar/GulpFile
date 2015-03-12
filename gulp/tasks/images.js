var config          = require('../config')

gulp.task('images', function() {
  return gulp.src(config.images.src)
  .pipe(plugin.changed(config.images.dest)) // Ignore unchanged files
  .pipe(plugin.imagemin()) // Optimize
  .pipe(gulp.dest(config.images.dest))
  .pipe(plugin.browserSync.reload({stream:true}));
});