module.exports = function ( grunt ) {
    require( "load-grunt-tasks" )( grunt );    /* this line here */

    // Project configuration.
    grunt.initConfig( {
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: "expanded"
                },
                files: {
                    "dist/styles.css": "src/styles/styles.scss"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/styles.min.css": [ "dist/styles.css" ]
                }
            }
        },
        clean: [ "dist/styles.css", "dist/styles.css.map" ],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: [ "src/styles/*.scss" ],
                tasks: [  "sass", "cssmin", "clean" ],
            },
        },
    } );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( "grunt-contrib-sass" );
    grunt.loadNpmTasks( "grunt-contrib-cssmin" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    // Default task(s).
    grunt.registerTask( "default", "watch" );

};