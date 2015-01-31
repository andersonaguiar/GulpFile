var config      = require('../config'),
    gulp        = require('gulp');

gulp.task('w', function() {
    gulp.watch(
        // sass|less|stylus
        [config.global.preprocessor.src], [config.global.preprocessor.choice]
    );
});

