'use strict';

var config = require('./config');

var watch = {

  livereload: {
    files: [
      config.src + '/**/*'
    ],
    tasks: ['copy:build'],
    options: {
      livereload: true
    }
  }

};

module.exports = watch;
