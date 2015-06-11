/*
 * In progress
 */

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // use ngAnnotate instead og ngMin
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    //watch: {},

    // The actual grunt server settings
    //connect: {},

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    //autoprefixer: {},

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
      },
      app: {
        src: ['<%= yeoman.app %>/index.html', 'index.html' ],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    //filerev: {},

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    //useminPrepare: {},

    // Performs rewrites based on filerev and the useminPrepare configuration
    //usemin: {},

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
  

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', '{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          dot: true,
          cwd: 'js',  // set working folder / root to copy (can be improve by yeoman)
          src: '**/*',           // copy all files and subfolders
          dest: 'dist/app/js',    // destination folder
          expand: true           // required when using cwd
        }, {
          dot: true,
          cwd: 'css', 
          src: '**/*',           
          dest: 'dist/app/css',    
          expand: true          
        }, {
          dot: true,
          cwd: 'data', 
          src: '**/*',           
          dest: 'dist/app/data',    
          expand: true           
       }, {
          dot: true,
          cwd: 'partials',  
          src: '**/*.html',           
          dest: 'dist/app/partials',    
          expand: true           
       }, {
          dot: true,
          cwd: '',  
          src: 'index.html',         
          dest: 'dist/app/',    
          expand: true           
       }]
     }
      },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'svgmin'
      ]
    }

    // Test settings
    //karma: { }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',      
      /*'need to do'*/
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'copy:dist',
    'cssmin',
    'uglify',    
    'htmlmin'
  ]);
  grunt.registerTask('default', [
    'newer:jshint',
    /*
     * to do
    */
    'build'
  ]);
};
