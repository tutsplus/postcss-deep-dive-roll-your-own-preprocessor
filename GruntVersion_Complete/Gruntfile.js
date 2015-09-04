module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('postcss-import')(),
          require('postcss-mixins')(),
          require('postcss-for')(),
          require('postcss-simple-vars')({silent: true}),
          require('postcss-css-variables')(),
          require('postcss-each')(),
          require('postcss-conditionals')(),
          require('postcss-calc')(),
          require('postcss-nested')(),
          require('postcss-sass-extend')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};