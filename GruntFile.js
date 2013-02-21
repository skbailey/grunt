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
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          mainConfigFile: "scripts/javascripts/main.js",
          name: "scripts/javascripts/main",
          out: "base/main-optimized.js",
          paths: {
            jquery: "empty:",
            underscore: "empty:",
            backbone: "empty:"
          }
        }
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');

};