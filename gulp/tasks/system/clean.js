var config  = require('../../config')
,   exec    = require('child_process').exec;

gulp.task('clean', function(cb){
  exec('rm -Rf ' + config.dest, function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});
