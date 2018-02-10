const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('./static/sass/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('js', () => {
  return gulp.src('./static/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['sass', 'js'], () => {
  browserSync.init({
    server: './dist/'
  });

  gulp.watch('./static/sass/*.scss', ['sass'])
  gulp.watch('./static/js/*.js', ['js'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])