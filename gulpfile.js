const
  gulp       = require('gulp')
  requireDir = require('require-dir')
  tasks      = requireDir('./gulp');

exports.watch      = tasks.watch;
exports.pug        = tasks.pug;
exports.scss       = tasks.scss;
exports.js         = tasks.js;
exports.vendorScss = tasks.vendor_scss;
exports.vendorJs   = tasks.vendor_js;
exports.images     = tasks.images;
exports.fonts      = tasks.fonts;
exports.bs         = tasks.bs;
exports.sprite     = tasks.sprite;

exports.default = gulp.parallel(exports.bs, exports.watch)


