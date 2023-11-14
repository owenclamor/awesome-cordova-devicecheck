import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Device Check
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { DeviceCheck } from '@awesome-cordova-plugins/device-check';
 *
 *
 * constructor(private deviceCheck: DeviceCheck) { }
 *
 * ...
 *
 *
 * this.deviceCheck.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class DeviceCheckOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
    coolMethod(arg1: string): Promise<any>;
    getCPU(arg1: string): Promise<any>;
    getRAM(arg1: string): Promise<any>;
    getDeviceName(arg1: string): Promise<any>;
}

export declare const DeviceCheck: DeviceCheckOriginal;