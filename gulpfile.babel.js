import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', () => {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'nyan' }));
});
