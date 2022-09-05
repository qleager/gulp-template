const
  gulp    = require('gulp')
  plumber = require('gulp-plumber')
  sass    = require('gulp-sass')(require('sass'))
  postcss = require('gulp-postcss')
  purge   = require('@fullhuman/postcss-purgecss')
  rename  = require('gulp-rename')
  bs      = require('browser-sync');

module.exports = function sassVendorCompiler(cb) {
  gulp.src('src/sass/vendor.sass')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([
      purge({
        content: ['dist/*.html']
      })
    ]))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(bs.stream());
  cb();
}
