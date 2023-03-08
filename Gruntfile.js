"use strict";

module.exports = function ( grunt ) {
    grunt.loadNpmTasks( "grunt-css-purge" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-less" );

    grunt.initConfig( {
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/style.css": "src/styles/*.less" // destination file and source file
                }
            }
        },
        css_purge: {
            site: {
                options: {},
                src: "dist/style.css",
                dest: "dist/style.min.css",
            },
        },

        clean: [ "dist/style.css", "dist/styles.css.map" ],

        watch: {
            styles: {
                files: [ "src/styles/*.less" ], // which files to watch
                tasks: [ "less", "css_purge", "clean" ],
                options: {
                    nospawn: true
                }
            }
        }
    } );
    grunt.registerTask( "default", [ "less", "css_purge", "clean", "watch" ] );
};