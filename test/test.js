/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Jasmine generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        done(err);
        return;
      }

      this.app = helpers.createGenerator('jasmine:app', [
        '../../lib/generators/app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      'test/spec/test.js',
      'test/index.html'
    ];

    this.app.options['skip-install'] = true;
    this.app.run(function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
