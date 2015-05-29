var exec = require('child_process').exec;

gulp.task('clean', function(cb) {
  exec(
    'rm -Rf ' + config.dest + ' ./build.zip ./coverage',
    function(err) {
      if (err) return cb(err);
      cb();
    }
  );
});
