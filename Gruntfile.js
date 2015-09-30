/*global module:false*/
module.exports = function(grunt) {

  // START Dependencies

  var path = require('path');
  // Load nodejs modules related to grunt
  require('load-grunt-tasks')(grunt);

  // END Dependencies

  // Base configuration.
  grunt.initConfig({});

  // Load common configuration parts
  grunt.file.expand('grunt-config/grunt-task-*.js').forEach(loadGruntConfigPart);
  
  // Default task
  grunt.registerTask('default', ['clean', 'vendor', 'jshint', 'js', 'mocha_slimer']);

  // START Utils

  function loadGruntConfigPart(gruntConfigPath) {
    var absolutePath = path.resolve(gruntConfigPath);
    require(absolutePath)(grunt, path.dirname(gruntConfigPath));
  }

  // END Utils
};
