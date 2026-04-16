import React from "react";
import Avatar from "../../Avatar/Avatar";
import Icon from "../../Icon/Icon";
import Skeleton from "../../Skeleton/Skeleton";
import { HeaderProfileProps } from "../Header.types";
import { useDropdownToggle } from "../hooks/useDropdownToggle";

/**
 * Profile section displayed on the right side of the `Header`.
 *
 * Shows the user's avatar and name. Clicking it toggles a dropdown panel
 * that can contain any content — typically `<DropdownItem>` entries.
 * The dropdown closes automatically when the user clicks outside.
 *
 * The `children` must be a `<Dropdown>` component — `visible` and `align="right"`
 * are injected automatically via `React.cloneElement`, so the consumer does not
 * need to manage the `visible` prop manually.
 *
 * @example
 * ```tsx
 * <HeaderProfile name="Jane Doe" letter="J" avatar_src={avatarUrl}>
 *   <Dropdown>
 *     <DropdownItem icon="person" label="Profile" />
 *     <DropdownItem icon="logout" label="Sign out" onClick={signOut} />
 *   </Dropdown>
 * </HeaderProfile>
 * ```
 */
export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  name,
  children,
  avatar_src,
  letter,
  skeleton,
}) => {
  const { isOpen, dropdownRef, toggle } = useDropdownToggle();

  const state = isOpen ? "open" : "close";

  const dropdown = React.isValidElement(children)
    ? React.cloneElement(
        children as React.ReactElement<{ visible: boolean; align: string }>,
        { visible: isOpen, align: "right" },
      )
    : children;

  return (
    <div ref={dropdownRef} className="profile-root">
      <button
        className="profile"
        tabIndex={0}
        onClick={toggle}
        disabled={skeleton}
      >
        <div className="avatar">
          <Avatar
            skeleton={skeleton}
            size="md"
            src={avatar_src}
            letter={letter}
          />
        </div>

        {skeleton ? (
          <Skeleton height="24px" width="70px" />
        ) : (
          <h1 className="name">{name}</h1>
        )}

        <div className={`icon ${state}`}>
          <Icon size="sm" icon="keyboard_arrow_down" />
        </div>
      </button>

      {dropdown}
    </div>
  );
};
