import { FormData } from "../SavebarTrigger.types";

/**
 * Returns `true` when every key in both objects has the same value.
 * Treats `undefined` and `""` as equivalent (empty field).
 */
export function isFormUnchanged(a: FormData, b: FormData): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((k) => (a[k] ?? "") === (b[k] ?? ""));
}
