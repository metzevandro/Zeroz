import "./InputNumber.scss";
import React from "react";
import { InputNumberProps } from "./InputNumber.types";
/**
 * `InputNumber` is a numeric stepper input with increment and decrement buttons.
 *
 * Values are clamped within the `[min, max]` range on every interaction.
 * The component works in both controlled (`value` + `onChange`) and
 * uncontrolled modes. In uncontrolled mode, `min` is used as the initial value.
 *
 * The label is associated with the input via `htmlFor` / `id` (WCAG 2.1 SC 1.3.1).
 *
 * @example
 * ```tsx
 * // Uncontrolled with bounds
 * <InputNumber label="Quantity" min={1} max={10} onChange={console.log} />
 *
 * // Controlled
 * <InputNumber label="Quantity" value={qty} min={0} onChange={(v) => setQty(v)} />
 *
 * // Error state
 * <InputNumber label="Age" error textError="Value is required" />
 * ```
 */
declare const InputNumber: React.FC<InputNumberProps>;
export default InputNumber;
