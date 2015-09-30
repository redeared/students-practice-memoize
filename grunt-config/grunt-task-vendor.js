module.exports = function(grunt) {
  grunt.config.merge({
    bower_concat: {
      vendor: {
        dest: 'dist/js/vendor.js',
        cssDest: 'dist/css/vendor.css',
        callback: function(mainFiles, component) {
          return mainFiles.map(function(filepath) {
            // Use minified files if available
            var minFilepath = filepath.replace(/\.(js|css)$/, '.min.$1');
            return grunt.file.exists(minFilepath) ? minFilepath : filepath;
          });
        }
      }
    },
    copy: {
      vendorSourceMaps: {
        files: [{
          expand: true,
          cwd: 'bower_components',
          src: ['**/jquery.min.map'],
          dest: 'dist/js',
          flatten: true
        }]
      }
    }
  });

  grunt.registerTask('vendor', ['bower_concat', 'copy:vendorSourceMaps']);
};