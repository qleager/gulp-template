const
  gulp    = require('gulp')
  plumber = require('gulp-plumber')
  uglify  = require('gulp-uglify')
  include = require('gulp-include')
  rename  = require('gulp-rename')
  bs      = require('browser-sync');

module.exports = function jsTransfer(cb) {
  gulp.src('src/js/vendor.js')
    .pipe(plumber())
    .pipe(include())
    .pipe(uglify()).on('error', function(error) {
      return console.error(error);
    })
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(bs.stream());
  cb();
}
