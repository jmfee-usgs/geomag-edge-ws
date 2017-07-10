'use strict';

var gruntConfig = {
  config: require('./config'),

  clean: require('./clean'),
  connect: require('./connect'),
  copy: require('./copy'),
  uglify: require('./uglify'),
  watch: require('./watch'),

  tasks: [
    'grunt-connect-proxy',
    'grunt-connect-rewrite',
    'grunt-contrib-clean',
    'grunt-contrib-connect',
    'grunt-contrib-copy',
    'grunt-contrib-watch'
  ]
};

module.exports = gruntConfig;
