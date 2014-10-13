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
                           '!<%= src_dir %>/less/ie.less'
                       ],
                       "<%= build_dir %>/css/ie.css": [
                           '<%= src_dir %>/less/ie.less'
                       ]
                   }
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
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['clean', 'requirejs', 'copy', 'less']);

    grunt.registerTask('start', [
        'build',
        'watch'
    ]);
};