import { registerPlugin } from '@capacitor/core';

import type { CameraCapPlugin } from './definitions';

const CameraCap = registerPlugin<CameraCapPlugin>('CameraCap', {
  web: () => import('./web').then(m => new m.CameraCapWeb()),
});

export * from './definitions';
export { CameraCap };
