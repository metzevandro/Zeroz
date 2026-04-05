import type { ButtonSize, ButtonVariant } from "../Button.types";

interface BuildButtonClassNameParams {
  variant: ButtonVariant;
  size: ButtonSize;
  isLoading: boolean;
  disabled: boolean;
  className?: string;
}

/**
 * Assembles the final className string for the Button component.
 * Centralizes class composition logic to keep the component body clean.
 */
export function buildButtonClassName({
  variant,
  size,
  isLoading,
  disabled,
  className,
}: BuildButtonClassNameParams): string {
  const classes: string[] = ["button", variant, size];

  if (isLoading) classes.push("is-loading");
  if (disabled) classes.push("button--disabled");
  if (className) classes.push(className);

  return classes.join(" ");
}
