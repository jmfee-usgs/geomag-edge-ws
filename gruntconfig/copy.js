'use strict';

var config = require('./config'),
    fs = require('fs'),
    packageJson;

packageJson = JSON.parse(fs.readFileSync('package.json'));


var copy = {
  build: {
    expand: true,
    cwd: config.src,
    dest: config.build + '/' + config.src,
    src: [
      '**/*',
      '!**/*.js',
      '!**/*.scss',
      '!**/*.orig'
    ],
    options: {
      mode: true,
      process: function (content, srcpath) {
        return content.replace('{{VERSION}}', packageJson.version);
      }
    }
  },
  dist: {
    expand: true,
    cwd: config.build + '/' + config.src,
    dest: config.dist,
    src: [
      '**/*',
      '!**/*.js',
      '!**/*.css'
    ],
    options: {
      mode: true
    }
  },
  test: {
    expand: true,
    cwd: config.test,
    dest: config.build + '/' + config.test,
    src: [
      '**/*',
      '!**/*.js',
      '!**/*.scss',
      '!**/*.orig'
    ]
  }
};

module.exports = copy;
