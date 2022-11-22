const
  gulp   = require('gulp')
  uglify = require('gulp-uglify')
  bs     = require('browser-sync')
  eslint = require('gulp-eslint');

module.exports = function jsCompiler(cb) {
  gulp.src('src/script.js')
    // .pipe(uglify()).on('error', function(error) {
    //   console.log(error);
    //   cb(error);
    // })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(bs.stream());
  cb();
}
