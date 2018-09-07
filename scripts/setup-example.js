const fs = require('fs-extra');
const { execSync } = require('child_process');

fs.removeSync('./example/react-native-keyboard-accessory');
fs.copySync('./src/.', './example/react-native-keyboard-accessory');
