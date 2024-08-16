import { WebPlugin } from '@capacitor/core';
import type { CameraCapPlugin } from './definitions';
export declare class CameraCapWeb extends WebPlugin implements CameraCapPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openCamera(): Promise<{
        imageUri: string;
    }>;
}
declare const CameraCap: CameraCapWeb;
export { CameraCap };
