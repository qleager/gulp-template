const
  gulp       = require('gulp')
  requireDir = require('require-dir')
  tasks      = requireDir('./gulp');

exports.watch      = tasks.watch;
exports.pug        = tasks.pug;
exports.sass       = tasks.sass;
exports.js         = tasks.js;
exports.vendorSass = tasks.vendor_sass;
exports.vendorJs   = tasks.vendor_js;
exports.images     = tasks.images;
exports.fonts      = tasks.fonts;
exports.bs         = tasks.bs;
exports.sprite     = tasks.sprite;

exports.default = gulp.parallel(exports.bs, exports.watch)


