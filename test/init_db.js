/**!
 * cnpmjs.org - test/init_db.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var co = require('co');
var crypto = require('crypto');
var path = require('path');
require('./init');
var config = require('../config');
var cnpm = require('..');


function initDb(){
  return function(cb){
    console.log(process.env);
    cnpm.initDb(require('./config/' + process.env.DB + '.js'), true, function(){
      cb();
    });
  }
};

co(function*(){
  yield initDb();

  var models = require('../models');
  var User = models.User;

  var usernames = [
    'cnpmjstest101',
    'cnpmjstest102',
    'cnpmjstest103',
    'cnpmjstest10', // admin
    'cnpmjstestAdmin2', // other admin
    'cnpmjstestAdmin3', // other admin
  ];

  var count = usernames.length;
  usernames.forEach(function (name) {
    var user = User.build({
      name: name,
      email: 'fengmk2@gmail.com',
      ip: '127.0.0.1',
      rev: '1',
    });
    user.salt = crypto.randomBytes(30).toString('hex');
    user.password_sha = User.createPasswordSha(name, user.salt);
    user.save().then(function () {
      count--;
      if (count === 0) {
        console.log('[test/init_db.js] init test users success');
        process.exit(0);
      }
    }).catch(function (err) {
      throw err;
    });
  });
})()

