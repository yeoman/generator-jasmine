'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var JasmineGenerator = module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.sourceRoot(path.join(__dirname, '../../', 'templates'));
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    this.copy('test.js', 'test/spec/test.js');
  },

  install: function () {
    process.chdir('test');
  }
});
