// load all gulp plugins
require('matchdep').filterDev('gulp-*').forEach(function(module){
    global[module.replace(/^gulp-/, '')] = require(module);
});

// set configs for plugins
module.exports = {
    stylus: { },
    global: {
        preprocessor: {
            choice: 'stylus', //sass, less or stylus
            src:    'assets/stylus/**/*.styl', //dir of sass, less or stylus
            dest:   'assets/css' //dir of css dest
        }
    }
}