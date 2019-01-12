'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


gulp.task('styles', () => {
    //find my scss files
 return gulp.src('./dev/styles/**/*.scss')
 // convert them to css and log any errors
     .pipe(sass().on('error', sass.logError))
     // concatenate them into one file called style.css
     .pipe(concat('style.css'))
     // dump style.css into ./public/styles/
     .pipe(gulp.dest('./public/styles/'))
});

gulp.task('watch', () => {
    gulp.watch('./dev/styles/**/*.scss', gulp.series('styles'));
});