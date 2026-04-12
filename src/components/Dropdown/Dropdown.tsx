import "./Dropdown.scss";
import React from "react";
import { DropdownProps } from "./Dropdown.types";

/**
 * `Dropdown` is a conditional menu container that renders its children
 * only when `visible` is `true`.
 *
 * The component is **stateless** — visibility control is always external.
 * The menu panel expands to fit its content and is never constrained by
 * a narrow parent container.
 *
 * Use the `align` prop to control which side the panel opens towards:
 * `"left"` (default) anchors to the left edge of the trigger and expands right;
 * `"right"` anchors to the right edge and expands left — ideal for triggers
 * near the right boundary of the viewport.
 *
 * Compose it with `<DropdownTitle>` for section headings and
 * `<DropdownItem>` for interactive entries.
 *
 * @example
 * ```tsx
 * // Opens to the right (default)
 * <Dropdown visible={isOpen}>
 *   <DropdownItem icon="person" label="Profile" onClick={goToProfile} />
 * </Dropdown>
 *
 * // Opens to the left — use near right edge of the screen
 * <Dropdown visible={isOpen} align="right">
 *   <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * </Dropdown>
 * ```
 */
const Dropdown: React.FC<DropdownProps> = ({
  children,
  visible,
  align = "left",
}) => (
  <div className="dropdown-menu-root">
    <div
      className={[
        "dropdown-menu",
        `dropdown-menu--align-${align}`,
        visible ? "dropdown-menu--visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!visible}
    >
      {children}
    </div>
  </div>
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
