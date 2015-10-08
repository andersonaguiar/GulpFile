var exec = require('child_process').exec;

gulp.task('clean', (cb) => {
  exec(
    'rm -Rf ' + config.dest + ' ./build.zip ./coverage',
    (err) => {
      if (err) return cb(err);
      cb();
    }
  );
});
