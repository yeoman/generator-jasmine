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
    this.copy('_bower.json', 'test/bower.json');
    this.copy('bowerrc', 'test/.bowerrc');
    this.copy('test.js', 'test/spec/test.js');
    this.copy('index.html', 'test/index.html');
  },

  install: function () {
    process.chdir('test');
    this.installDependencies({
      npm: false,
      skipInstall: this.options['skip-install']
    });
  }

});
