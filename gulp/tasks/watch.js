var config      = require('../config');

gulp.task('watch', ['browserSync'], function(callback) {
    // sass|stylus
    gulp.watch(config.preprocessor.src, [config.preprocessor.choice]);

    // images
    gulp.watch(config.images.src, ['images']);

    // markup
    gulp.watch(config.markup.src, ['markup']);
});
