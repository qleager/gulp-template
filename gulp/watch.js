const 
  { watch, series } = require('gulp');

module.exports = function watching() {
  watch(['src/**/*.pug'], series('pug'));
  watch(['src/**/*.sass'], series('sass'));
  watch(['src/script.js'], series('js'));
  watch(['src/sass/vendor.sass'], series('vendorSass'));
  watch(['src/js/vendor.js'], series('vendorJs'));
  watch(['src/images/*'], series('images'));
  watch(['src/fonts/**/*'], series('fonts'));
  watch(['src/images/icons/*'], series('sprite'));
}
