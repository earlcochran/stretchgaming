var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

gulp.task('browserify', function() {
	browserify('./src/js/main.jsx')
		.transform('babelify', {presets: ["es2015", "react"]})
		.require('jquery')
		.bundle()
		.pipe(source('main.js'))
		//.pipe(buffer())
		//.pipe(uglify())
		.pipe(gulp.dest('dist/js'))	
});

gulp.task('copy', function() {
	gulp.src('./src/index.html')
	  .pipe(gulp.dest('./dist'));
	gulp.src('./src/assets/**/*.*')
	  .pipe(gulp.dest('./dist/assets'))	
});

gulp.task('default', ['browserify', 'copy'], function() {
	return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});