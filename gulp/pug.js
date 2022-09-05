const
  gulp    = require('gulp')
  plumber = require('gulp-plumber')
  pug     = require('gulp-pug')
  bs      = require('browser-sync');

module.exports = function pugTask(cb) {
  gulp.src('src/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream())
  cb();
}
