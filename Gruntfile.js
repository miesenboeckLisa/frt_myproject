
module.exports = function(grunt) {

    grunt.initConfig({

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'public/index.html': 'index.html',     // 'destination': 'source'
                }
            }
            },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/assets'
                }]
            }

            }
        ,
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
              files: ['**/*.js'],
                tasks: ['concat', 'uglify'],
            },
        },

        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'public/main.css': 'scss/main.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['sass', 'htmlmin','imagemin']);

};