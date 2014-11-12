/**!
 * cnpmjs.org - index.js
 *
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */

var config = require('./config');
var childProcess = require('child_process');

exports.loadConfig = config.loadConfig;
exports.config = config;

exports.startWorker = function (customConfig) {
  config.loadConfig(customConfig);
  require('./worker');
};

exports.startSync = function (customConfig) {
  config.loadConfig(customConfig);
  require('./sync');
};

exports.initDb = function(customConfig){
  config.loadConfig(customConfig);
  var cmd = ['node', '--harmony', initscript, 'true', config.database.dialect].join(' ');
  var stdout = childProcess.execSync(cmd);
  process.stdout.write(stdout);
}
