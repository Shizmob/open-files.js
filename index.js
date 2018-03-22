'use strict';
try {
        module.exports = require('./platform/' + process.platform);
} catch(e) {
        console.warn(`open-files.js support not available for your platform (${process.platform})!`);
        module.exports = null;
}
