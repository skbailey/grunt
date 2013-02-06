module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          wrapped: true
        },
        files: {
          "result.js": "first.handlebars"
        }
      }
    },
    coffee: {
      app: {
        src: ['scripts/coffeescripts/**/*.coffee'],
        dest: 'scripts/javascripts'
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "scripts/javascripts",
          mainConfigFile: "scripts/javascripts/main.js",
          out: "build/main-optimized.js"
        }
      }
    },
    clean: {
      folder: "assets/js/",
      folderTwo: ["assetsOne/js/", "assetsTwo/js/"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-clean');

};