gulp.task('mocha', function() {
  gulp.src([ config.tests.src ], { read : false })
    .pipe($.mocha({ reporter: 'list' }));
});

gulp.task('test', function(done) {
  gulp.src([ config.tests.src ])
    .pipe($.istanbul())
    .on('finish', function() {
      gulp.src([ config.tests.src ])
        .pipe($.mocha()).on('error', done)
        .pipe( $.istanbul.writeReports()).on('end', done);
    });
});
