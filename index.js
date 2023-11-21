var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var DeviceCheckOriginal = /** @class */ (function (_super) {
    __extends(DeviceCheckOriginal, _super);
    function DeviceCheckOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceCheckOriginal.prototype.functionName = function (arg1, arg2) { return cordova(this, "functionName", {}, arguments); };
    DeviceCheckOriginal.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    DeviceCheckOriginal.prototype.getCPU = function (arg1) { return cordova(this, "getCPU", {}, arguments); };
    DeviceCheckOriginal.prototype.getRAM = function (arg1) { return cordova(this, "getRAM", {}, arguments); };
    DeviceCheckOriginal.prototype.getDeviceName = function (arg1) { return cordova(this, "getDeviceName", {}, arguments); };
    DeviceCheckOriginal.prototype.getDeviceSDK = function (arg1) { return cordova(this, "getDeviceSDK", {}, arguments); };
    DeviceCheckOriginal.pluginName = "DeviceCheck";
    DeviceCheckOriginal.plugin = "cordova-plugin-devicecheck";
    DeviceCheckOriginal.pluginRef = "DeviceCheck";
    DeviceCheckOriginal.repo = "https://github.com/owenclamor/DeviceCheck.git";
    DeviceCheckOriginal.install = "";
    DeviceCheckOriginal.installVariables = [];
    DeviceCheckOriginal.platforms = ["Android", "iOS"];
    return DeviceCheckOriginal;
}(AwesomeCordovaNativePlugin));
var DeviceCheck = new DeviceCheckOriginal();
export { DeviceCheck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlLWNoZWNrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7O0lBa0MvRywrQkFBMEI7Ozs7SUFTekQsa0NBQVksYUFBQyxJQUFZLEVBQUUsSUFBWTtJQUt2QyxnQ0FBVSxhQUFDLElBQVk7SUFLdkIsNEJBQU0sYUFBQyxJQUFZO0lBS25CLDRCQUFNLGFBQUMsSUFBWTtJQUtuQixtQ0FBYSxhQUFDLElBQVk7SUFLMUIsa0NBQVksYUFBQyxJQUFZOzs7Ozs7OztzQkFoRjNCO0VBOENpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcclxuICpcclxuICogVE9ETzpcclxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XHJcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcclxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xyXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxyXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBEZXZpY2UgQ2hlY2tcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IERldmljZUNoZWNrIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RldmljZS1jaGVjayc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlQ2hlY2s6IERldmljZUNoZWNrKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZGV2aWNlQ2hlY2suZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0RldmljZUNoZWNrJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXZpY2VjaGVjaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0RldmljZUNoZWNrJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb3dlbmNsYW1vci9EZXZpY2VDaGVjay5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VDaGVjayBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xyXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xyXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGZ1bmN0aW9uTmFtZShhcmcxOiBzdHJpbmcsIGFyZzI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvb2xNZXRob2QoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldENQVShhcmcxOiBzdHJpbmcpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UkFNKGFyZzE6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXREZXZpY2VOYW1lKGFyZzE6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXREZXZpY2VTREsoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuIl19