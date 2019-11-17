module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'styles.css': 'styles.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['./*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
