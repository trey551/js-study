'use strict';

module.exports = function (grunt) {
    var config = {
        build_dir: './build',
        src_dir: './src',

        clean: ['<%= build_dir %>'],

        copy: {
            main: {
                files: [
                    {expand: true, cwd: '<%= src_dir %>', src: ['fonts/**'], dest: '<%= build_dir %>'},
                    {expand: true, cwd: '<%= src_dir %>', src: ['images/**'], dest: '<%= build_dir %>'},
                    {expand: true, cwd: '<%= src_dir %>', src: ['**/*.html'], dest: '<%= build_dir %>'}
                ]
            }
        },

        less: {
            main: {
                options: {
//                    paths: [
//                        '<%= frontend_dir %>/vendor/bootstrap/less'
//                    ],
                    //syncImport: true
                },
                files: {
                    "<%= build_dir %>/css/main.css": [
                        '<%= src_dir %>/less/all.less',
                        '<%= src_dir %>/less/custom.less'
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
                tasks: ['requirejs']
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
                        "modules/index": "./modules/index"
                    },
                    skipDirOptimize: true,
                    modules: [
                        {name: 'modules/index'}
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