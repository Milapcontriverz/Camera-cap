import { WebPlugin } from '@capacitor/core';
export class CameraCapWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async openCamera() {
        console.log('Camera not implemented on web');
        throw this.unimplemented('Camera not implemented on web.');
    }
}
const CameraCap = new CameraCapWeb();
export { CameraCap };
//# sourceMappingURL=web.js.map