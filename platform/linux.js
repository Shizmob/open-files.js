'use strict';
const path = require('path');
const fs = require('fs');

function mapCallback(arr, cb, final, opts) {
	opts = opts || {};
	opts.start = opts.start || 0;
	opts.ignoreErrors = opts.ignoreErrors || false;

	if (opts.start == arr.length) {
		final(null, arr);
	} else {
		cb(arr[opts.start], (err, v) => {
			if (!opts.ignoreErrors && err)
				return final(err, []);
			arr[opts.start++] = v;
			mapCallback(arr, cb, final, opts);
		});
	}
}

function getOpenFiles(pid, cb) {
	const base = path.join('/proc', pid.toString(), 'fd');
	fs.readdir(base, (err, files) => {
		if (err)
			return cb(err, []);
		mapCallback(files, (f, cb) => fs.readlink(path.join(base, f), cb), cb);
	});
}

module.exports = getOpenFiles;
