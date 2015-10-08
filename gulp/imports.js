import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

global['gulp'] =  gulp;
global['$']    =  plugins({
                    pattern       : ['*'],
                    scope         : ['dependencies', 'devDependencies'],
                    replaceString : /^gulp(-|\.)/,
                    camelize      : true,
                    lazy          : true,
                    rename        : {
                      'gulp-filesize': 'size'
                    }
                  });

