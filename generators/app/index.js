'use strict';

var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('test.js'),
      this.destinationPath('test/spec/test.js')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('test/index.html')
    );
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
