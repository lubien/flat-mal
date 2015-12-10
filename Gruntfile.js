module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
      bsFiles: {
        src : [
        'src/style/*.css',
        'src/*.html'
        ]
      },
      options: {
        notify: false,
        watchTask: true,
        server: {
          baseDir: "./src/"
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'src/style/main.min.css': 'src/style/main.css'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'src/style/main.css' : 'src/sass/main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('serve', 'start the server', function (target) {
    grunt.task.run([
      'browserSync',
      'watch'
    ]);
  });
}