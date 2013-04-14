'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var JasmineGenerator = module.exports = function JasmineGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../../', 'templates'));

  this.on('end', function () {
    process.chdir('test');
    this.installDependencies({
      npm: false,
      skipInstall: options['skip-install']
    });
  });
};

util.inherits(JasmineGenerator, yeoman.generators.Base);

JasmineGenerator.prototype.setupEnv = function setupEnv() {
  this.copy('_bower.json', 'test/bower.json');
  this.copy('bowerrc', 'test/.bowerrc');
  this.copy('test.js', 'test/spec/test.js');
  this.copy('index.html', 'test/index.html');
};
