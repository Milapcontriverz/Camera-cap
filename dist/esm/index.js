import { registerPlugin } from '@capacitor/core';
const CameraCap = registerPlugin('CameraCap', {
    web: () => import('./web').then(m => new m.CameraCapWeb()),
});
export * from './definitions';
export { CameraCap };
//# sourceMappingURL=index.js.map