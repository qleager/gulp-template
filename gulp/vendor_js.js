const
  gulp   = require('gulp')
  uglify = require('gulp-uglify')
  rigger = require('gulp-rigger')
  rename = require('gulp-rename')
  bs     = require('browser-sync');

module.exports = function jsTransfer(cb) {
  gulp.src('src/js/vendor.js')
    .pipe(rigger())
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
