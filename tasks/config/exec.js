module.exports = function (grunt) {

  grunt.config.set('exec', {
    webpackBuild: 'webpack -p --progress',
    webpackDevServer: 'webpack-dev-server --hot --inline',
  });

  grunt.loadNpmTasks('grunt-exec');
};
