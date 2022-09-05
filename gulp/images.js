const
  gulp     = require('gulp')
  imagemin = require('gulp-imagemin')
  newer    = require('gulp-newer')
  bs       = require('browser-sync');

module.exports = function imageCompressor(cb) {
  return gulp.src('src/images/*')
    // .pipe(newer('dist/assets/images'))
    .pipe(imagemin({
      verbose: true,
      progressive: true,
      optimizationLevel: 7,
      svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(bs.stream());
  cb();
}
