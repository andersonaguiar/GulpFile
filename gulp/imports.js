'use strict';

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
