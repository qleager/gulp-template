const
  gulp         = require('gulp')
  plumber      = require('gulp-plumber')
  sass         = require('gulp-sass')(require('sass'))
  postcss      = require('gulp-postcss')
  purge        = require('@fullhuman/postcss-purgecss')
  autoprefixer = require('gulp-autoprefixer')
  gcmq         = require('gulp-group-css-media-queries')
  sourcemap    = require('gulp-sourcemaps')
  bs           = require('browser-sync')
  stylelint    = require('gulp-stylelint')

module.exports = function scssCompiler(cb) {
  gulp.src('src/*.scss',)
    .pipe(plumber())
    .pipe(stylelint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      purge({
        content: ['dist/*.html'],
        safelist: [
          /active\-[0-9]+/,
          /show\-[0-9]+/,
          'active'
        ]
      })
    ]))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(sourcemap.write())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(bs.stream());
  cb();
}
