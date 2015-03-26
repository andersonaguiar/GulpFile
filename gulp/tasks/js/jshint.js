var config = require('../../config');

gulp.task('jshint', function() {
  gulp.src(config.js.src)
  .pipe($.jshint('.jshintrc'))
  .pipe($.jshint.reporter('jshint-stylish'));
});
