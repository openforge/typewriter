'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-623dacd9.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["of-typewriter.cjs",[[0,"of-typewriter",{"message":[1],"speed":[2],"tag":[1]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
