const
  gulp   = require('gulp')
  uglify = require('gulp-uglify')
  bs     = require('browser-sync')
  eslint = require('gulp-eslint')
  babel  = require('gulp-babel');

module.exports = function jsCompiler(cb) {
  gulp.src('src/script.js')
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
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
