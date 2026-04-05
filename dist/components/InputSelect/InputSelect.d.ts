import "./InputSelect.scss";
import React from "react";
import { InputSelectProps } from "./InputSelect.types";
/**
 * `InputSelect` is a fully custom select field with a styled dropdown panel.
 *
 * Unlike a native `<select>`, this component renders its own option list,
 * giving you full visual control on both desktop and mobile — no OS picker,
 * no unstyled native dropdown.
 *
 * Supports controlled usage via `value` + `onChange`, error and disabled states,
 * keyboard navigation (Enter/Space to open, Escape to close), and accessible
 * label association via `aria-labelledby`.
 *
 * @example
 * ```tsx
 * <InputSelect
 *   label="Country"
 *   options={["Brazil", "USA", "Portugal"]}
 *   value={country}
 *   onChange={setCountry}
 * />
 * ```
 */
declare const InputSelect: React.FC<InputSelectProps>;
export default InputSelect;
