var config      = require('../../config');

gulp.task('mocha', function() {
  gulp.src([ config.tests.src ], { read : false })
  .pipe(
    plugin.mocha({ reporter: 'list' })
  );
});

gulp.task('test', function(done) {
  gulp.src([ config.tests.src ])
    .pipe( plugin.istanbul() )
    .on('finish', function() {
      gulp.src([ config.tests.src ])
      .pipe( plugin.mocha() )
      .on('error', done )
      .pipe( plugin.istanbul.writeReports() )
      .on('end', done );
    });
});
