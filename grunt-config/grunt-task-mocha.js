module.exports = function(grunt) {
  grunt.config.merge({
    mocha_slimer: {
      all: {
        options: {
          ui: 'bdd',
          reporter: 'Spec',
          run: true,
        },
        src: ['dist/test/test-memoize.html']
      }
    }
  });
};