module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'dist/index.html': 'src/index.html',     // 'destination': 'source'
		        'dist/contact.html': 'src/contact.html'
		      }
		    }
		},
		sass: {
			dist: {
				files: {
					'src/style/style.css' : 'src/sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html:{
				files:"src/*.html",
				tasks:["htmlmin"]
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['jshint']);

	// this would be run by typing "grunt annotate" on the command line
	grunt.registerTask('annotate', ['ngAnnotate', 'concat']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch']);
};
