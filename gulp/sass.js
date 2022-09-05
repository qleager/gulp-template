const
  gulp         = require('gulp')
  plumber      = require('gulp-plumber')
  sass         = require('gulp-sass')(require('sass'))
  postcss      = require('gulp-postcss')
  purge        = require('@fullhuman/postcss-purgecss')
  autoprefixer = require('gulp-autoprefixer')
  gcmq         = require('gulp-group-css-media-queries')
  sourcemap    = require('gulp-sourcemaps')
  bs           = require('browser-sync');

module.exports = function sassCompiler(cb) {
  gulp.src('src/*.sass',)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      purge({
        content: ['dist/*.html']
      })
    ]))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(sourcemap.write())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(bs.stream());
  cb();
}
