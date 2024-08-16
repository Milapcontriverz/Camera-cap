import { WebPlugin } from '@capacitor/core';

import type { CameraCapPlugin } from './definitions';

export class CameraCapWeb extends WebPlugin implements CameraCapPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openCamera(): Promise<{ imageUri: string }> {
    console.log('Camera not implemented on web');
    throw this.unimplemented('Camera not implemented on web.');
  }
}
const CameraCap = new CameraCapWeb();

export { CameraCap };
