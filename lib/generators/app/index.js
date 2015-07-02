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
    this.copy('index.html', 'test/index.html');
  },

  install: function () {
    if (this.options['skip-install']) {
      return;
    }

    var dependencies = [
      'jasmine'
    ];

    this.bowerInstall(dependencies, {saveDev: true});
  }

});
