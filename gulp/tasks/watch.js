var config      = require('../config');

gulp.task('watch', ['browserSync'], function(callback) {
    // sass|stylus
    gulp.watch(config.preprocessor.src, [config.preprocessor.choice]);

    // images
    gulp.watch(config.images.src, ['images']);

    // js tests
    gulp.watch(config.tests.src, ['test']);

    // markup
    gulp.watch(config.markup.src, ['markup']);
});
