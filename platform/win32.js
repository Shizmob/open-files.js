'use strict';
const helper = require('bindings')('open-files-helper.node');

function getOpenFiles(pid, cb) {
	const files = helper.getOpenFiles(pid);
	if (files === null) {
		cb(true, []);
	} else {
		cb(null, files);
	}
}

module.exports = getOpenFiles;
