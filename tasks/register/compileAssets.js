'use strict';

var compileAssets = [
    'clean:dev',
    'copy',
];

if (process.env.NODE_ENV === 'development') {
  console.log('Starting Webpack Dev Server!');
  compileAssets[compileAssets.length] = 'exec:webpackDevServer';
} else if (process.env.NODE_ENV === 'local-prod') {
  console.log('Running webpack build');
  compileAssets[compileAssets.length] = 'exec:webpackBuild';
}

module.exports = function (grunt) {
  grunt.registerTask('compileAssets', compileAssets);
};
