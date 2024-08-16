'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CameraCap = core.registerPlugin('CameraCap', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CameraCapWeb()),
});

class CameraCapWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CameraCapWeb: CameraCapWeb
});

exports.CameraCap = CameraCap;
//# sourceMappingURL=plugin.cjs.js.map
