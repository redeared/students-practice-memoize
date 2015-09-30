module.exports = function(grunt) {
  grunt.config.merge({
    jshint: {
      options: {
        esnext: true, curly: true, eqeqeq: true,
        immed: true, latedef: false, newcap: true,
        noarg: true, sub: true, undef: true,
        unused: true, boss: true, eqnull: true,
        browser: true,
        globals: {
          module: true, require: true,
          $: true, jQuery: true, _: true, console: true,
          chai: true,
          describe: true, before: true, beforeEach: true, it: true
        }
      },
      all: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    }
  });
};