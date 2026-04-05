import "./InputTime.scss";
import React from "react";
import { InputTimeProps } from "./InputTime.types";
/**
 * `InputTime` is a time selection field with a drum-roll picker dropdown.
 *
 * The picker uses an infinite scroll column (iOS-style) for both hours and
 * minutes — the list loops seamlessly so the user can scroll in either
 * direction without hitting a boundary. Items snap to the center on scroll end.
 *
 * The input also supports direct typing with auto-masking (`HH:MM`).
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <InputTime label="Start time" placeholder="HH:MM" onChange={console.log} />
 *
 * // Controlled
 * <InputTime label="Meeting time" placeholder="HH:MM" value={time} onChange={setTime} />
 * ```
 */
declare const InputTime: React.FC<InputTimeProps>;
export default InputTime;
