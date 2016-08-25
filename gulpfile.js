<!-- gulp.js-->
var gulp = require('gulp');
var run = require('gulp-run');
var livereload = require('gulp-livereload');

gulp.task('copy-html', function() {
    gulp.src('index.html')
    // Perform minification tasks, etc here
    .pipe(livereload());
});

gulp.task('run', function() {
  return run('electron main.js').exec();
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('index.html', ['copy-html']);
});

gulp.task('default', ['watch', 'run']);
