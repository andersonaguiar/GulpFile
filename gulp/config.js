'use strict';

// =======================  PLUGINS ===================================

global['gulp']    = require('gulp');
global['plugin']  = require('gulp-load-plugins')({
                        pattern       : ['*']
                      , scope         : ['dependencies', 'devDependencies']
                      , replaceString : /^gulp(-|\.)/
                      , camelize      : true
                      , lazy          : true
                      , rename        : {
                        'gulp-filesize': 'size'
                      }
                    });

// paths map
var path = {
        src: 'src'
      , dest: 'app'
    };

// =======================  CONFIGS ===================================

// set configs for plugins
module.exports = {
  src: path.src,
  dest: path.dest,
  test: { },
  js: {
    src: path.src + '/js/**/*',
    dest: path.dest + '/assets/js'
  },
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: path.src + ''
    }
  },
  images: {
    src: path.src + '/images/**',
    dest: path.dest + '/assets/images'
  },
  markup: {
    src: path.src + '/**/*.html',
    dest: path.dest + ''
  },
  preprocessor: {
    choice    : 'sass', //sass or stylus
    src       : path.src + '/sass/**/*.scss', //dir of sass, less or stylus
    dest      : path.dest + '/assets/css' //dir of css dest
  }
};


