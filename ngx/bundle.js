'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var DeviceCheck = /** @class */ (function (_super) {
    tslib.__extends(DeviceCheck, _super);
    function DeviceCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceCheck.prototype.functionName = function (arg1, arg2) { return core.cordova(this, "functionName", {}, arguments); };
    DeviceCheck.prototype.coolMethod = function (arg1) { return core.cordova(this, "coolMethod", {}, arguments); };
    DeviceCheck.prototype.getCPU = function (arg1) { return core.cordova(this, "getCPU", {}, arguments); };
    DeviceCheck.prototype.getRAM = function (arg1) { return core.cordova(this, "getRAM", {}, arguments); };
    DeviceCheck.prototype.getDeviceName = function (arg1) { return core.cordova(this, "getDeviceName", {}, arguments); };
    DeviceCheck.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeviceCheck, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceCheck.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeviceCheck });
    DeviceCheck.pluginName = "DeviceCheck";
    DeviceCheck.plugin = "cordova-plugin-devicecheck";
    DeviceCheck.pluginRef = "";
    DeviceCheck.repo = "https://github.com/owenclamor/DeviceCheck.git";
    DeviceCheck.install = "";
    DeviceCheck.installVariables = [];
    DeviceCheck.platforms = ["Android", "iOS"];
    DeviceCheck = tslib.__decorate([], DeviceCheck);
    return DeviceCheck;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeviceCheck, decorators: [{
            type: i0.Injectable
        }], propDecorators: { functionName: [], coolMethod: [], getCPU: [], getRAM: [], getDeviceName: [] } });

exports.DeviceCheck = DeviceCheck;
