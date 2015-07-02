/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('Jasmine generator test', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'temp'))
      .withOptions({'skip-install': true})
      .on('end', done);
  });

  it('creates expected files', function () {
    assert.file([
      'test/spec/test.js',
      'test/index.html'
    ]);
  });
});
