var connect = require('grunt-contrib-connect/node_modules/connect');
var serveStatic = require('grunt-contrib-connect/node_modules/serve-static');

module.exports = function(grunt) {

  grunt.initConfig({
	 connect: {
	  livereload: {
	    options: {
	       port: 5000,
	       base: './src',
	       middleware: function(connect) {
	           return [
	             require('grunt-connect-prism/middleware'),
	             serveStatic('.tmp'),
	             connect().use(
	               '/bower_components',
	               serveStatic('./bower_components')
	             ),
	             connect().use(
	               '/node_modules',
	               serveStatic('node_modules')
	             ),
	             connect().use(
  	               '/rest',
  	               serveStatic('rest')
  	             ),
	             serveStatic('./src')
	           ];
	         }
	    }
	  }
	},
	prism: {
	  options: {
	    mode: 'proxy',
	    host: 'localhost',
	    port: 8090,
	    context: '/api'
	  }
	},
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-prism');

  grunt.registerTask('default', ['jshint', 'prism', 'connect:livereload', 'watch']);

};