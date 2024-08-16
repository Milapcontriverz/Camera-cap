import { WebPlugin } from '@capacitor/core';

import type { CameraCapPlugin } from './definitions';

export class CameraCapWeb extends WebPlugin implements CameraCapPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openCamera(): Promise<void> {
    console.log('Open Camera (web not implemented)');
  }

  async capturePhoto(): Promise<string> {
    console.log('Capture Photo (web not implemented)');
    return 'photo-url';
  }

  async releaseCamera(): Promise<void> {
    console.log('Release Camera (web not implemented)');
  }
}
const CameraCap = new CameraCapWeb();

export { CameraCap };
