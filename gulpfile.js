"use strict";

var gulp = require('gulp');

var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var concat = require('gulp-concat');

var lint = require('gulp-eslint');

var config = {
	paths: {
		mainJs: 'app/main.jsx',
		js: ['app/**/*.jsx'],
		jsOut: 'public/static/js/'
	}
};


gulp.task('default', ['js']);

gulp.task('js', function () {
	browserify(config.paths.mainJs)
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest( config.paths.jsOut ));
});

gulp.task('lint', function () {
	return gulp.src(config.paths.js)
	.pipe(lint())
	.pipe(lint.format());
});

gulp.task('watch', function () {
	gulp.watch(config.paths.js, ['js']);
});

