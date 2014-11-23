var Project = require('../core/Project');
var cli = require('../util/cli');
var defaultConfig = require('../config');

function lock(logger, options, config) {
    var project;

    options = options || {};
    config = defaultConfig(config);
    project = new Project(config, logger);

    return project.createLockFile(options,config);
}

// -------------------

lock.line = function (logger, argv) {
    var options = lock.options(argv);
    return lock(logger, options);
};

lock.options = function (argv) {
    return cli.readOptions({
    }, argv);
};

lock.completion = function () {
    // TODO:
};

module.exports = lock;
