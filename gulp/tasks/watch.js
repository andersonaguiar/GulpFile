var config      = require('../config'),
    gulp        = require('gulp');

gulp.task('watch', ['browserSync'], function(callback) {
    // sass|less|stylus
    gulp.watch(config.global.preprocessor.src, [config.global.preprocessor.choice]);

    // images
    gulp.watch(config.images.src, ['images']);

    // markup
    gulp.watch(config.markup.src, ['markup']);
});
