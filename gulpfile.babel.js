'use strict';

// load gulp and plugins
require('./gulp/imports');

// load config for tasks and plugins
require('./gulp/config');

// Require all tasks in gulp/tasks, including subfolders
require('require-dir')('./gulp/tasks', { recurse: true });
