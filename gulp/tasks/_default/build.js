var config = require('../../config');

gulp.task('build', ['images', 'uglifyJs', config.preprocessor.choice]);
