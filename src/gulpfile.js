var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

// Tarea ej-1-------------------------------------------------------


gulp.task('ej-1', function() {
  return gulp.src('').pipe(shell(['./src/generate-gitbook']));
});
