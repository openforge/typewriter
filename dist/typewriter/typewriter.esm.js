import { p as patchBrowser, b as bootstrapLazy } from './index-0e71bd20.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["of-typewriter",[[4,"of-typewriter",{"message":[1],"speed":[8]}]]]], options);
});
