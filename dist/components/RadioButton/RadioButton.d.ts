import "./RadioButton.scss";
import React from "react";
import { RadioButtonProps } from "./RadioButton.types";
/**
 * `RadioButton` is an accessible radio input with optional label.
 *
 * Supports controlled usage via `checked` + `onChange`, disabled state,
 * and keyboard activation via Enter and Space.
 *
 * The `<label>` is associated with the radio via `htmlFor` / `id`
 * for full accessibility compliance (WCAG 2.1 SC 1.3.1).
 *
 * > **Note:** For mutually exclusive options, use multiple `RadioButton`
 * > components and manage the selected value externally — only one
 * > should be `checked` at a time.
 *
 * @example
 * ```tsx
 * // Controlled group
 * <RadioButton label="Option A" checked={selected === "a"} onChange={() => setSelected("a")} />
 * <RadioButton label="Option B" checked={selected === "b"} onChange={() => setSelected("b")} />
 *
 * // Disabled
 * <RadioButton label="Unavailable" disabled />
 * ```
 */
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
