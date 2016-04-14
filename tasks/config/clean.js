/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
module.exports = function (grunt) {

  grunt.config.set('clean', {
    dev: ['.tmp/public/**'],
    prod: [
      '.tmp/public/**/*',
      '!.tmp/public/dist/**', // Important not to wipe the dist folder that webpack generates
    ],
    build: ['www'],
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
