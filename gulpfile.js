var gulp = require('gulp'),
	gutil = require('gulp-util'),
	webserver = require('gulp-webserver'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	minifyjs = require('gulp-js-minify');
	
	//This task monitors js files under app directory.
	gulp.task('js', function(){
		gulp.src('client/app/**/*.js')
	});

	//This task monitors HTML files under app directory.
	gulp.task('html', function(){
		gulp.src('client/app/**/*.html')
	});

	gulp.task('sass', function () {
	  return gulp.src('client/sass/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('client/app/css'));
	});

	gulp.task('minify-css', () => {
	  return gulp.src('client/app/css/*.css')
	    .pipe(cleanCSS({compatibility: 'ie8'}))
	    .pipe(concat('style.min.css'))
	    .pipe(gulp.dest('client/css/'));
	});

	gulp.task('concat-js', () => {
	  return gulp.src(['client/app/js/**/*.js', '!client/app/js/videoApp.js', '!client/app/js/lib/**/*.js'])
	    .pipe(minifyjs())
	    .pipe(concat('videoApp.min.js'))
	    .pipe(gulp.dest('client/js/'));
	});

	//This task monitors CSS files under app's css directory.
	gulp.task('css', function(){
		gulp.src('client/css/**/*.css')
	});

	//This task monitors live change of js, css & html files of app directory.
	gulp.task('watch', function(){
		// gulp.watch('client/app/**/*.js',['js', 'concat-js']);
		// gulp.watch('client/sass/**/*.scss', ['sass', 'minify-css']);
		// gulp.watch(['client/app/*.html',
		// 	'client/app/views/*.html'],['html']);
		gulp.watch('client/app/**/*.js', gulp.parallel('js', 'concat-js'));
		gulp.watch('client/sass/**/*.scss', gulp.parallel('sass', 'minify-css'));
	});

	//This task handles live reloading and automatically opens a browser window on changing source files of app.
	gulp.task('webserver', function(){
		gulp.src('client').pipe(webserver({
			port:3000,
			livereload: true,
			open: true
		}));
	});

	//This task executes all default task on gulp run.
	//gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
	gulp.task('default', gulp.series('watch', 'html', 'js', 'css', 'webserver', function(done) {
	  // do more stuff
	  done();
	}));