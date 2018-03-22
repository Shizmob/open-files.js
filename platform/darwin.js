'use strict';
const fs = require('fs');
const { spawn } = require('child_process');

function getOpenFiles(pid, cb) {
	const files = [];

	const proc = spawn('lsof', ['-nP', '-Ftn', '-p', pid.toString()]);
	let process = false;
	proc.stdout.on('data', data => {
		for (let line of data.toString().trim().split('\n')) {
			if (line === 'tREG' || line == 'tCHR') {
				process = true;
				continue;
			}
			if (process && line.startsWith('n/')) {
				files.push(line.substr(1));
				process = false;
			}
		}
	});
	proc.on('close', code => {
		if (code)
			return cb(code, []);
		return cb(null, files);
	});
}

module.exports = getOpenFiles;
