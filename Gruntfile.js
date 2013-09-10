module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean build directory
    clean: ['public/deploy'],

    // tasks to be executed and files
    // to be watched for changes
    watch: {
      files: ['./public/js/app/**/*.hbs', './public/js/app/**/*.js', './public/js/test/SpecRunner.js'],
      tasks: ['clean', 'handlebars:compile', 'requirejs', 'concat', 'cssmin']
    },

    // require js
    requirejs: {
      compile: {
        options: {
          appDir: '',
          dir: './public/deploy/js',
          baseUrl: './public/js',
          //configuration file
          mainConfigFile: 'public/js/main.js',
          // optimize javascript files with uglifyjs
          optimize: 'uglify',
          // define dependencies
          modules: [
            {
              name: 'main'
            },
            {
              name: 'app/application',
              exclude: ['main']
            }
          ]
        }
      }
    },

    //Precompile hbs files into app/template.js
    //generates the template registry
    handlebars: {
      compile: {
        options: {
          namespace: 'JST',
          amd: true,
          processName: function(filename) {
            var pieces = filename.split('/');
            return pieces[pieces.length - 1];
          }
        },
        files: {
          'public/js/app/templates.js': 'public/js/**/*.hbs'
        }
      }
    },

    // js linting options
    jshint: {
      all: ['Gruntfile.js', 'public/js/main.js', 'public/js/app/**/*.js', '!public/js/app/templates.js', '!public/js/app/utils/debug.js'],
      jshintrc: '.jshintrc'
    },

    concat: {
      css: {
        src: ['public/css/*.css', 'public/js/app/**/*.css'],
        dest: 'public/deploy/css/<%= pkg.name %>-<%= pkg.version %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: 'public/deploy/css/<%= pkg.name %>-<%= pkg.version %>.concat.css',
        dest: 'public/deploy/css/<%= pkg.name %>.min-<%= pkg.version %>.css'
      }
    },

    karma: {
      watch: {
        configFile: 'karma.conf.js'
      },
      ci: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    arialinter: {
      files: [
        'public/js/app/**/*.hbs'
      ],
      options: {
        templates: true,
        levels: 'A'
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-arialinter');

  // default build task
  grunt.registerTask('default', 'build');

  // build task
  grunt.registerTask('build', ['clean', 'arialinter',  'jshint:all', 'handlebars', /*'testCI',*/ 'requirejs', 'concat', 'cssmin']);

  //test task for CI server
  grunt.registerTask('testCI', ['karma:ci']);

  // watch task
  grunt.registerTask('test', ['karma:watch']);

  // watch task
  grunt.registerTask('w', ['watch']);
};