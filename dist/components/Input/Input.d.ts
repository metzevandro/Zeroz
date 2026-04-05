import React from "react";
import "./Input.scss";
import { InputProps } from "./Input.types";
/**
 * `Input` is a flexible text input field that supports icons, password toggling,
 * inline validation feedback, skeleton loading state, and full accessibility.
 *
 * The `label` prop is automatically associated with the underlying `<input>`
 * via `htmlFor` / `id`, satisfying WCAG 2.1 SC 1.3.1 (Form Labels).
 *
 * @example
 * ```tsx
 * // Standard input with icon
 * <Input label="Email" icon="mail" onChange={handleChange} />
 *
 * // Password input
 * <Input label="Password" type="password" />
 *
 * // Error state
 * <Input label="Username" error textError="Username is already taken" />
 *
 * // Skeleton loading
 * <Input label="Name" skeleton />
 * ```
 */
declare const Input: React.FC<InputProps>;
export default Input;
