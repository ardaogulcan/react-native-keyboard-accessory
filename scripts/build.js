const fs = require('fs-extra');

fs.removeSync('./lib');
fs.copySync('./src', './lib');
fs.copySync('./package.json', './lib/package.json');
fs.copySync('./README.md', './lib/README.md');
fs.copySync('./LICENSE', './lib/LICENSE');
