// paths map
var path = {
  src:  'src',
  dest: 'build'
};

// set configs for plugins
global['config'] = {
  src:  path.src,
  dest: path.dest,
  tests: {
    src: 'tests/**/*'
  },
  zip: {
    name: 'build.zip',
    src:  path.dest + '/**/*',
    dest: './'
  },
  esformatter: {
    src:  path.src + '/assets/js/**/*',
    dest: path.src + '/assets/js'
  },
  js: {
    src:  path.src + '/assets/js/**/*.js',
    dest: path.dest + '/assets/js'
  },
  browserSync: {
    server: { baseDir: path.dest }
  },
  images: {
    src:  path.src + '/assets/images/**/*',
    dest: path.dest + '/assets/images'
  },
  markup: {
    src:  path.src + '/**/*.html',
    dest: path.dest
  },
  compass: {
    src:  path.src + '/assets/sass',
    dest: path.dest + '/assets/css'
  },
  scssLint: {
    conf: path.src + '/../scss-lint.yml'
  },
  preprocessor: {
    choice: 'sass', //sass or stylus
    src:    path.src + '/assets/sass/**/*.scss', //dir of sass or stylus
    dest:   path.dest + '/assets/css' //dir of css dest
  }
};
