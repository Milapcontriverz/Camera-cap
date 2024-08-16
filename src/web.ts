import { WebPlugin } from '@capacitor/core';

import type { CameraCapPlugin } from './definitions';

export class CameraCapWeb extends WebPlugin implements CameraCapPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
