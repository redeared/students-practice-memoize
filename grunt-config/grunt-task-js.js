module.exports = function(grunt) {
  grunt.config.merge({
    babel: {
      options: {
        modules: 'common',
        sourceMap: false
      },
      sources: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'temp/babel-out/src',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'temp/babel-out/test',
          ext: '.js'
        }, {
          expand: true,
          cwd: 'test',
          src: '**/*.spec.js',
          dest: 'temp/babel-out/test',
          ext: '.spec.js'
        }]
      }
    },
    browserify: {
      options: {},
      sources: {
        src: 'temp/babel-out/src/**/*.js',
        dest: 'dist/js/memoize.js'
      },
      test: {
        src: 'temp/babel-out/test/**/*.js',
        dest: 'dist/test/js/memoize.spec.js'
      }
    },
    copy: {
      testHTML: {
        files: [{
          expand: true,
          cwd: 'test',
          src: ['**/*.html'],
          dest: 'dist/test',
          ext: '.html'
        }]
      }
    }
  });

  grunt.registerTask('js', ['babel', 'browserify', 'copy:testHTML']);
};