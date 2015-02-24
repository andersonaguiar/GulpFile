var gulp    = require('gulp'),
    config  = require('../../config.js'),
    exec    = require('child_process').exec;

gulp.task('clean', function(cb){
    exec('rm -Rf ' + config.global.dest, function(err) {
        if (err) return cb(err); // return error
        cb(); // finished task
    });
});