'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CameraCap$1 = core.registerPlugin('CameraCap', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CameraCapWeb()),
});

class CameraCapWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CameraCapWeb: CameraCapWeb,
    CameraCap: CameraCap
});

exports.CameraCap = CameraCap$1;
//# sourceMappingURL=plugin.cjs.js.map
