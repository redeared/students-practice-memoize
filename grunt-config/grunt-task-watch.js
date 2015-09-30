module.exports = function(grunt) {
  grunt.config.merge({
    watch: {
      js: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['jshint', 'js', 'mocha_slimer']
      }
    }
  });
};