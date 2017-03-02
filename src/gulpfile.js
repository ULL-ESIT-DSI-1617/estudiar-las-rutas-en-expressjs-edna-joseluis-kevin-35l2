var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

/* Tarea ej-1 -------------------------------------------------------

gulp.task('ej-1', function() {
  return gulp.src('').pipe(shell(['./src/ej1']));
});
*/


// Tarea publicacion gitbook ---------------------------------------

gulp.task('ej-1', function(){
  return gulp.src('./src').pipe(shell(['node ej1.js']))
  });


/*

// Tarea ej-2 -------------------------------------------------------

gulp.task('ej-2', function() {
  return gulp.src('').pipe(shell(['./src/ej2']));
});


// Tarea ej-3 -------------------------------------------------------

gulp.task('ej-3', function() {
  return gulp.src('').pipe(shell(['./src/ej3']));
});


// Tarea ej-4 -------------------------------------------------------

gulp.task('ej-4', function() {
  return gulp.src('').pipe(shell(['./src/ej4']));
});


// Tarea ej-5 -------------------------------------------------------

gulp.task('ej-5', function() {
  return gulp.src('').pipe(shell(['./src/ej5']));
});


// Tarea ej-6 -------------------------------------------------------

gulp.task('ej-6', function() {
  return gulp.src('').pipe(shell(['./src/ej6']));
});



*/