import "./Switch.scss";
import React from "react";
import { SwitchProps } from "./Switch.types";
/**
 * `Switch` is an accessible toggle control rendered as a styled checkbox.
 *
 * It supports controlled usage via `modelValue` + `onUpdate`, disabled and
 * no-events modifiers, Enter key toggling, and auto-generated accessible ids.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Switch label="Enable notifications" onUpdate={setEnabled} />
 *
 * // Controlled
 * <Switch label="Dark mode" modelValue={isDark} onUpdate={setIsDark} />
 *
 * // Disabled
 * <Switch label="Feature unavailable" disabled />
 * ```
 */
declare const Switch: React.FC<SwitchProps>;
export default Switch;
