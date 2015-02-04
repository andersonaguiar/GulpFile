// load all gulp plugins
require('matchdep').filterDev('gulp-*').forEach(function(module){
    global[module.replace(/^gulp-/, '')] = require(module);
});

var src     = 'app/src',
    dest    = 'app/build';

// set configs for plugins
module.exports = {
    stylus: { },
    sass: { },
    less: { },
    js: {
        src: src + '/js/**/*',
        dest: dest + '/assets/js'
    },
    browserSync: {
        server: {
          // Serve up our build folder
          baseDir: dest
        }
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/assets/images'
    },
    markup: {
        src: src + '/**/*.html',
        dest: dest
    },
    global: {
        preprocessor: {
            choice: 'stylus', //sass, less or stylus
            src:    src + '/stylus/**/*.styl', //dir of sass, less or stylus
            dest:   dest + '/assets/css' //dir of css dest
        }
    }
}