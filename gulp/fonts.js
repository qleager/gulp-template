const
  gulp = require('gulp')
  bs   = require('browser-sync');

module.exports = function fontTransfer() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe(bs.stream());
}
