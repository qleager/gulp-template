const bs = require('browser-sync');

module.exports = function bsl() {
	bs.init({
		server: {
			baseDir: 'dist/',
		},
		browser: 'chrome',
		logPrefix: 'BROWSER:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}
