const 
  { watch, series } = require('gulp');

module.exports = function watching() {
  watch(['src/**/*.pug'], series('pug'));
  watch(['src/**/*.scss'], series('scss'));
  watch(['src/script.js'], series('js'));
  watch(['src/scss/vendor.scss'], series('vendorScss'));
  watch(['src/js/vendor.js'], series('vendorJs'));
  watch(['src/images/*'], series('images'));
  watch(['src/fonts/**/*'], series('fonts'));
  watch(['src/images/icons/*'], series('sprite'));
}
