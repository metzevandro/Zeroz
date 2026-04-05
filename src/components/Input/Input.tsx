import React, { useId } from "react";
import "./Input.scss";
import Skeleton from "../Skeleton/Skeleton";
import { InputProps } from "./Input.types";
import { useInputDimensions } from "./hooks/useInputDimensions";
import { usePasswordVisibility } from "./hooks/usePasswordVisibility";
import { useInputFocus } from "./hooks/useInputFocus";
import { getInputContentClass } from "./utils/input.utils";
import { InputIcon, PasswordToggle } from "./subcomponents/InputIcon";

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
const Input: React.FC<InputProps> = ({
  icon,
  fillIcon,
  label,
  error = false,
  disabled = false,
  textError,
  value,
  inputRef,
  skeleton = false,
  type,
  ...rest
}) => {
  // Generates a stable, unique id to associate <label> with <input>.
  // useId() is React 18+; for older versions, replace with a uuid utility.
  const generatedId = useId();

  const { containerRef, dimensions } = useInputDimensions();
  const { isPasswordVisible, togglePasswordVisibility, resolvedType } =
    usePasswordVisibility(type);
  const { handleDivClick } = useInputFocus(containerRef);

  const isPasswordType = type === "password";

  return (
    <div className="input-root">
      {label && (
        <div className="input-header">
          {/* htmlFor links this label to the input with the matching id,
              enabling click-to-focus and screen reader association. */}
          <label htmlFor={generatedId}>{label}</label>
        </div>
      )}

      {skeleton ? (
        <Skeleton
          height={`${dimensions.height}`}
          width={`${dimensions.width}`}
        />
      ) : (
        <div ref={containerRef}>
          <div
            className={getInputContentClass(disabled, error)}
            onClick={handleDivClick}
          >
            <input
              id={generatedId}
              size={0}
              {...rest}
              value={value}
              disabled={disabled}
              ref={inputRef}
              type={resolvedType}
            />

            {isPasswordType ? (
              <PasswordToggle
                isVisible={isPasswordVisible}
                fillIcon={fillIcon}
                onToggle={togglePasswordVisibility}
              />
            ) : (
              <InputIcon icon={icon} fillIcon={fillIcon} />
            )}
          </div>

          {error && <div className="input-error">{textError}</div>}
        </div>
      )}
    </div>
  );
};

export default Input;
