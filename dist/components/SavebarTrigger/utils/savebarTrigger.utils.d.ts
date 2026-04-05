import { FormData } from "../SavebarTrigger.types";
/**
 * Returns `true` when every key in both objects has the same value.
 * Treats `undefined` and `""` as equivalent (empty field).
 */
export declare function isFormUnchanged(a: FormData, b: FormData): boolean;
