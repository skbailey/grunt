module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      build: ['build']
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        cwd: 'scripts/coffeescripts',
        src: ['**/*.coffee'],
        dest: 'scripts/javascripts',
        ext: '.js'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  //grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');

};