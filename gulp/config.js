// load all gulp plugins
require('matchdep').filterDev('gulp-*').forEach(function(module){
    global[module.replace(/^gulp-/, '')] = require(module);
});


// =======================  CONFIGS ===================================
var PATH = {
    src: 'src',
    dest: 'app'
}

// set configs for plugins
module.exports = {
    stylus: { },
    sass: { },
    less: { },
    js: {
        src: PATH.src + '/js/**/*',
        dest: PATH.dest + '/assets/js'
    },
    browserSync: {
        server: {
          // Serve up our build folder
          baseDir: PATH.src
        }
    },
    images: {
        src: PATH.src + '/images/**',
        dest: PATH.dest + '/assets/images'
    },
    markup: {
        src: PATH.src + '/**/*.html',
        dest: PATH.dest
    },
    global: {
        src: PATH.src,
        dest: PATH.dest,
        preprocessor: {
            choice: 'stylus', //sass, less or stylus
            src:    PATH.src + '/stylus/**/*.styl', //dir of sass, less or stylus
            dest:   PATH.dest + '/assets/css' //dir of css dest
        }
    }
}