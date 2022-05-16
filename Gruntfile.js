module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            //scripts: {
              //  files: ['**/*.js'],
               // tasks: ['concat', 'uglify'],
           // },
        },

        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'public/main.css': 'scss/main.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
   // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass',
        //'concat', 'uglify'
    ]);

};