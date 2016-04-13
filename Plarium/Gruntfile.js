'use strict';

module.exports = function (grunt) {
    var config = {
        build_dir: './build',
        src_dir: './src',
        bower_dir: './bower',

        clean: ['<%= build_dir %>'],

        copy: {
            main: {
                files: [
                    {expand: true, cwd: '<%= src_dir %>', src: ['fonts/**', 'images/**', '**/*.html'], dest: '<%= build_dir %>'}
                ]
            },
            requirejs: {
                files: [
                    {expand: true, cwd: '<%= bower_dir %>/requirejs', src: ['require.js'], dest: '<%= build_dir %>/js'}
                ]
            }
        },

        less: {
            main: {
                   files: {
                       "<%= build_dir %>/css/main.css": [
                           '<%= bower_dir %>/animate.css/animate.css',
                           '<%= src_dir %>/**/*.less',
                           '<%= src_dir %>/css/*.css',
                           '!<%= src_dir %>/less/ie.less'
                       ],
                       "<%= build_dir %>/css/ie.css": [
                           '<%= src_dir %>/less/ie.less'
                       ]
                   }
               }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: '<%= build_dir %>/css',
              src: ['*.css', '!*.min.css'],
              dest: '<%= build_dir %>/css',
              ext: '.min.css'
            }]
          }
        },

        watch: {
            css: {
                files: [
                    '<%= src_dir %>/less/**/*.less',
                    '<%= src_dir %>/less/**/*.css'
                ],
                tasks: ['less']
            },
            js: {
                files: [
                    '<%= src_dir %>/js/**/*.js'
                ],
                tasks: ['requirejs', 'copy:requirejs']
            },
            html: {
                files: [
                    '<%= src_dir %>/**/*.html'
                ],
                tasks: ['copy']
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: "./src/js",
                    baseUrl: "./",
                    mainConfigFile: "./src/js/main.js",
                    dir: "./build/js",
                    paths: {
                        "main": "main"
                    },
                    skipDirOptimize: true,
                    modules: [
                        {name: 'main'}
                    ],
                    removeCombined: true,
                    optimize: 'none'
                }
            }
        },
        sprite:{
          all: {
            src: '<%= src_dir %>/images/sprite/*.png',
            dest: '<%= src_dir %>/images/sprite.png',
            destCss: '<%= src_dir %>/css/sprite.css'
          }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '<%= build_dir %>/css/*.css',
                        '<%= build_dir %>/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '<%= build_dir %>'
                }
            }
        },
        imagemin: {                          // Task 
              target: {
                  files: [{
                    expand: true,                  // Enable dynamic expansion 
                    cwd: '<%= src_dir %>',                   // Src matches are relative to this path 
                    src: ['images/*.{png,jpg,gif}'],   // Actual patterns to match 
                    dest: '<%= build_dir %>'                  // Destination path prefix 
                  }]
              }
          }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('build', [
        'clean',
        'requirejs',
        'sprite',
        'copy',
        'less',
        'cssmin',
        // 'imagemin',
        'browserSync'
    ]);

    grunt.registerTask('start', [
        'build',
        'watch'
    ]);
};