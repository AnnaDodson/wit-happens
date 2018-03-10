'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: './_dist'
        }
    });
    //gulp.watch('./_dist/**/*.html').on('change', reload);
});

gulp.task('html', function() {
    gulp.src(['./src/**/*.html', '!./src/_**/*.*'])
        .pipe(gulp.dest('./_dist'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(gulp.dest('./_dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./_dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass:build', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./_dist/css'));
});

gulp.task('move:html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./_dist'));
});


gulp.task('move:js', function() {
    return gulp.src(['./js/library/*.js', './js/*.js'])
        .pipe(concat('site.js', {newLine: '\r\n'}))
        .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('_dist/js'))
});

gulp.task('move:images', function() {
    return gulp.src('./images/**/*')
        .pipe(gulp.dest('./_dist/images'));
});

gulp.task('move:fonts', function() {
    return gulp.src('./fonts/**/*')
        .pipe(gulp.dest('./_dist/fonts'));
});

gulp.task('all:watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
    //gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ['html', 'js', 'sass', 'all:watch','move:js', 'move:images', 'move:fonts', 'serve']);
gulp.task('build', ['sass:build', 'move:images', 'move:fonts', 'move:js', 'move:html']);
