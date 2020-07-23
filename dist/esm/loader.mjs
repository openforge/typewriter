import { a as patchEsm, b as bootstrapLazy } from './index-038cf8d9.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["of-typewriter",[[0,"of-typewriter",{"message":[1],"speed":[2],"tag":[1]}]]]], options);
});

export { defineCustomElements };
