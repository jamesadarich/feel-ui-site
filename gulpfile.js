"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var liveServer = require("live-server");

gulp.task('dev-site', function() {

   //serve with live changes
   var params = {
    port: 3000, // Set the server port. Defaults to 8080.
    host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "public", // Set root directory that's being server. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    //ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['', './node_modules']] // Mount a directory to a route.
};
liveServer.start(params);

   gulp.watch(['./css/**/*.*'], function (file) {
      gulp.src(['./css/**/*.*']).pipe(gulp.dest('./site/css'));
   });

   gulp.watch(['./src/**/*.*'], function (file) {
      gulp.src(['./src/**/*.*']).pipe(gulp.dest('./site/src'));
   });
});

gulp.task('sass', function () {
   gulp.src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task(
   'dev',
   ['sass:watch',
   'dev-site'],
   function () {

   });

   gulp.task('build', function (done) {

      // var tsResult = gulp.src('./src/**/*.ts')
      //      .pipe(ts({
      //       noImplicitAny: true,
      //       module: 'amd',
      //       outFile: 'nine-tails.js'
      //     }));
      //return tsResult.js.pipe(gulp.dest('./js'));
      //return tsResult.js.pipe(gulp.dest('./js/nine-tails.js'));
   });
