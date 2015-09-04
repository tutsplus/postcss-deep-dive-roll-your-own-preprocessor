var gulp = require('gulp');
var postcss = require('gulp-postcss');

var atImport = require('postcss-import');
var mixins = require('postcss-mixins');
var for_loop = require('postcss-for');
var simple_vars = require('postcss-simple-vars');
var css_vars = require('postcss-css-variables');
var each_loop = require('postcss-each');
var conditionals = require('postcss-conditionals');
var calc = require('postcss-calc');
var nested = require('postcss-nested');
var extend = require('postcss-sass-extend');

gulp.task('css', function () {
	var processors = [
		atImport,
		mixins,
		for_loop,
		simple_vars({silent: true}),
		css_vars,
		each_loop,
		conditionals,
		calc,
		nested,
		extend
	];
	return gulp.src('./src/style.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});