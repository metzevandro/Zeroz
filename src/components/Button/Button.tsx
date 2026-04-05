import React, { forwardRef, useMemo } from "react";

import "./Button.scss";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import Skeleton from "../Skeleton/Skeleton";

import type { ButtonProps } from "./Button.types";
import { useButtonDimensions } from "./hooks/useButtonDimensions";
import { buildButtonClassName } from "./utils/buildButtonClassName";

/**
 * # Button
 *
 * The primary interactive element for triggering actions.
 * Supports multiple semantic variants, sizes, loading and skeleton states,
 * and optional leading icons.
 *
 * ## Usage
 *
 * ```tsx
 * // Default primary button
 * <Button onClick={handleSave}>Save changes</Button>
 *
 * // Secondary action
 * <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
 *
 * // With icon
 * <Button icon="plus" variant="primary">Add item</Button>
 *
 * // Loading state (e.g. async form submit)
 * <Button isLoading={isSubmitting}>Submit</Button>
 *
 * // Skeleton placeholder during data fetch
 * <Button isSkeleton>Submit</Button>
 *
 * // Small size for toolbars or compact UIs
 * <Button size="sm" variant="secondary">Filter</Button>
 * ```
 *
 * ## Recommended use cases
 * - Form submissions → `variant="primary"`
 * - Cancel / back actions → `variant="secondary"`
 * - Confirmations (e.g. "Mark as done") → `variant="success"`
 * - Destructive or cautionary actions → `variant="warning"`
 *
 * ## Good practices
 * - Always provide meaningful `children` (button label).
 * - Use `ariaLabel` when the label alone isn't descriptive enough for screen readers.
 * - Pair `isLoading` with the async operation that triggered it.
 * - Never use `icon` without `children` — use an icon-only button component instead.
 */
const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      isSkeleton = false,
      isLoading = false,
      ariaLabel,
      className,
      children,
      disabled,
      ...rest
    },
    externalRef,
  ) => {
    const [internalRef, dimensions] = useButtonDimensions([
      size,
      variant,
      children,
      icon,
    ]);

    const buttonClassName = useMemo(
      () =>
        buildButtonClassName({
          variant,
          size,
          isLoading,
          disabled: Boolean(disabled),
          className,
        }),
      [variant, size, isLoading, disabled, className],
    );

    if (process.env.NODE_ENV === "development" && icon && !children) {
      throw new Error(
        "[Button] A button with `icon` must always have `children`. " +
          "Use a dedicated icon-only button component for icon-only cases.",
      );
    }

    if (isSkeleton && dimensions) {
      return (
        <Skeleton
          height={`${dimensions.height}px`}
          width={`${dimensions.width}px`}
        />
      );
    }

    return (
      <button
        {...rest}
        ref={(node) => {
          (
            internalRef as React.MutableRefObject<HTMLButtonElement | null>
          ).current = node;
          if (typeof externalRef === "function") externalRef(node);
          else if (externalRef)
            (
              externalRef as React.MutableRefObject<HTMLButtonElement | null>
            ).current = node;
        }}
        className={buttonClassName}
        disabled={disabled || isLoading}
        aria-label={ariaLabel}
        aria-busy={isLoading}
        aria-disabled={disabled}
      >
        {isLoading && <Loading variant="default" />}
        {icon && <Icon icon={icon} size="sm" />}
        {children}
      </button>
    );
  },
);

ButtonComponent.displayName = "Button";

export const Button = React.memo(ButtonComponent);
export default Button;
