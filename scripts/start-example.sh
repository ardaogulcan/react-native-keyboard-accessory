#!/usr/bin/env bash
#
rm -rf example/react-native-keyboard-accessory
mkdir example/react-native-keyboard-accessory
cp -a lib example/react-native-keyboard-accessory
cp index.js example/react-native-keyboard-accessory/index.js
cd example
npm start