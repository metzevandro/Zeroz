import "./Checkbox.scss";
import React from "react";
import { CheckboxProps } from "./Checkbox.types";
/**
 * `Checkbox` is an accessible, controlled checkbox input.
 *
 * It supports indeterminate state, disabled and no-events modifiers,
 * Enter key toggling via keyboard, and sync with an external `modelValue`.
 * A unique `id` is auto-generated via `useId()` when none is provided,
 * ensuring the `<label>` and `<input>` are always properly associated.
 *
 * @example
 * ```tsx
 * // Basic
 * <Checkbox label="Accept terms" onUpdate={setAccepted} />
 *
 * // Controlled
 * <Checkbox label="Subscribe" modelValue={isSubscribed} onUpdate={setSubscribed} />
 *
 * // Indeterminate (select-all pattern)
 * <Checkbox label="Select all" indeterminate={someChecked} modelValue={allChecked} onUpdate={toggleAll} />
 *
 * // Disabled
 * <Checkbox label="Unavailable option" disabled />
 * ```
 */
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
