function loadModule(module) {
    global[module.replace(/^gulp-/, '')] = require(module);
}

require('matchdep')
    .filterDev('gulp-*')
    .forEach(loadModule);