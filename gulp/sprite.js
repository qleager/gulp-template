const
  gulp      = require('gulp')
  svgSprite = require('gulp-svg-sprite')
  cheerio   = require('gulp-cheerio')
  bs        = require('browser-sync');

module.exports = function spriteCompiler(cb) {
  gulp.src('src/icons/*.svg')
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        $('style').remove();
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('dist/assets/icons'))
    .pipe(svgSprite({
      mode: {
        stack: {
          dest: '',
          sprite: "sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(bs.stream());
  cb();
}
