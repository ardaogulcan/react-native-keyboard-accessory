const fs = require('fs-extra');

fs.removeSync('./build');
fs.copySync('./src', './build');
fs.copySync('./package.json', './build/package.json');
fs.copySync('./README.md', './build/README.md');
fs.copySync('./LICENSE', './build/LICENSE');
fs.copySync('./index.d.ts', './build/index.d.ts');
