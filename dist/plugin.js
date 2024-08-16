var capacitorCameraCap = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
