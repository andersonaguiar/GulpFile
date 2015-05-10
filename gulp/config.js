'use strict';

// =======================  LOAD PLUGINS ====================================

global['gulp']  = require('gulp');
global['$']     = require('gulp-load-plugins')({
                    pattern       : ['*'],
                    scope         : ['dependencies', 'devDependencies'],
                    replaceString : /^gulp(-|\.)/,
                    camelize      : true,
                    lazy          : true,
                    rename        : {
                      'gulp-filesize': 'size'
                    }
                  });

// ==========================  CONFIGS ======================================

// paths map
var path = {
  src:  'src',
  dest: 'build'
};

// set configs for plugins
global['config'] = module.exports = {
  src:  path.src,
  dest: path.dest,
  tests: {
    src: path.src + '/js/tests/**/*'
  },
  zip: {
    name: 'build.zip',
    src:  path.dest + '/**/*',
    dest: './'
  },
  esformatter: {
    src:  path.src + '/js/*',
    dest: path.src + '/js'
  },
  js: {
    src:  path.src + '/js/*.js',
    dest: path.dest + '/assets/js'
  },
  browserSync: {
    server: { baseDir: path.dest }
  },
  images: {
    src:  path.src + '/images/**',
    dest: path.dest + '/assets/images'
  },
  markup: {
    src:  path.src + '/**/*.html',
    dest: path.dest
  },
  compass: {
    src:  path.src + '/sass',
    dest: path.dest + '/assets/css'
  },
  scssLint: {
    conf: path.src + '/../scss-lint.yml'
  },
  preprocessor: {
    choice: 'sass', //sass or stylus
    src:    path.src + '/sass/**/*.scss', //dir of sass or stylus
    dest:   path.dest + '/assets/css' //dir of css dest
  }
};
