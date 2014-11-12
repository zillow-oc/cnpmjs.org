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
var path = require('path');

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

exports.initDb = function(customConfig, force){
  config.loadConfig(customConfig);
  require('./models/init_script.js')(force); 
}
