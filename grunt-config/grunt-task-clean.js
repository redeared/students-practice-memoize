module.exports = function(grunt) {
  grunt.config.merge({
    clean: {
      all: {
        src: ['temp', 'dist/css', 'dist/js', 'dist/test/js']
      }
    }
  });
};