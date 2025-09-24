module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
    
      less: {
        development: {
          files: {
            "dist/css/main.css": "src/styles/main.less"
          }
        }
      },
  

      uglify: {
        build: {
          files: {
            "dist/js/app.min.js": ["src/scripts/app.js"]
          }
        }
      }
    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
 
    grunt.registerTask('default', ['less', 'uglify']);
  };
  