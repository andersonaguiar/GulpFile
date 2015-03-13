var config = require('../../config');

gulp.task('jshint', function() {
  gulp.src(config.js.src)
  .pipe(plugin.jshint('.jshintrc'))
  .pipe(plugin.jshint.reporter('jshint-stylish'));
});