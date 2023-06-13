const
  gulp = require('gulp')
  ts   = require('gulp-typescript')
  uglify = require('gulp-uglify')
  bs     = require('browser-sync')
  eslint = require('gulp-eslint');

module.exports = function tsCompiler(cb) {
  gulp.src('src/script.ts')
    .pipe(ts({
      noImplicitAny: true,
    }))
    // .pipe(uglify()).on('error', function(error) {
    //   console.log(error);
    //   cb(error);
    // })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(bs.stream());
  cb();
}
