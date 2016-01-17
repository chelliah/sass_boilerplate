'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//compile sass files
gulp.task('styles', function(){
    gulp.src('client/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('server/public/assets/styles/'));
});

//copy files
gulp.task('copy', function(){
    gulp.src(['node_modules/three/three.min.js'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('server/public/vendors/font-awesome/fonts'));
    gulp.src(['node_modules/font-awesome/css/*'])
        .pipe(gulp.dest('server/public/vendors/font-awesome/css'));
    gulp.src(['node_modules/jquery-touchswipe/jquery.touchSwipe.min.js'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['node_modules/normalize.css/normalize.css'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['client/views/**/*.html'])
        .pipe(gulp.dest('server/public/assets/views/'));
});

//uglify and concat js
gulp.task('js', function(){
    //intro animation
    gulp.src('client/scripts/welcome.js')
        .pipe(uglify())
        .pipe(concat('welcome.min.js'))
        .pipe(gulp.dest('server/public/assets/scripts/'));

    //main page
    gulp.src('client/scripts/app.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('server/public/assets/scripts/'));
});

//watch task
//gulp.task('default', function(){
//    gulp.watch('sass/**/*.scss', ['styles']);
//});

gulp.task('default', ['styles', 'js', 'copy']);