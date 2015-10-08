// load gulp and plugins
import all from './gulp/imports';

// load config for tasks and plugins
import config from './gulp/config';

// require plugin to load tasks
import tasks from 'require-dir';

// load all tasks in gulp/tasks, including subfolders
tasks('./gulp/tasks', { recurse: true });
