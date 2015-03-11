'use strict';

// =======================  PLUGINS ===================================

global['gulp']    = require('gulp');
global['plugin']  = require(
                      'gulp-load-plugins'
                    )({
                        pattern       : ['*']
                      , scope         : ['dependencies', 'devDependencies']
                      , replaceString : /^gulp(-|\.)/
                      , camelize      : true
                      , lazy          : true
                      , rename        : { }
                    });

// =======================  CONFIGS ===================================

// set configs for plugins
module.exports = {
  stylus: { },
  sass: { },
  less: { },
  test: {

  },
  js: {
    src: '<%=global.src%>/js/**/*',
    dest: '<%=global.dest%>/assets/js'
  },
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: '<%=global.src%>'
    }
  },
  images: {
    src: '<%=global.src%>/images/**',
    dest: '<%=global.dest%>/assets/images'
  },
  markup: {
    src: '<%=global.src%>/**/*.html',
    dest: '<%=global.dest%>'
  },
  global: {
    src: 'src',
    dest: 'app',
    preprocessor: {
      choice: 'stylus', //sass, less or stylus
      extension: '.styl', //.styl, .sass, .scss, .less
      src:    '<%=global.src%>/<%=global.preprocessor.choice%>/**/*<%=global.preprocessor.extension%>', //dir of sass, less or stylus
      dest:   '<%=global.dest%>/assets/css' //dir of css dest
    }
  }
}
