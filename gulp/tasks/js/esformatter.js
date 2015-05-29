gulp.task('esformatter', function() {
  return gulp.src(config.esformatter.src)
    .pipe($.esformatter({
      plugins: ["esformatter-quotes"],
      quotes: {
        type: "single",
        avoidEscape: false
      },
      lineBreak: {
        before: {
          // at least one line break before BlockStatement
          BlockStatement: '>=1',
          // only one line break before DoWhileStatementOpeningBrace
          DoWhileStatementOpeningBrace: '1',
          FunctionExpressionClosingBrace: '1'
        // ...
        },
        after: {
          FunctionExpressionOpeningBrace: '1'
        }
      }
    }))
    .pipe(gulp.dest(config.esformatter.dest));
});
