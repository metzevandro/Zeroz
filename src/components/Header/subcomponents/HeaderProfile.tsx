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
 * @example
 * ```tsx
 * <HeaderProfile name="Jane Doe" letter="J" avatar_src={avatarUrl}>
 *   <DropdownItem typeIcon="person" content="Profile" />
 *   <DropdownItem typeIcon="logout" content="Sign out" onClick={signOut} />
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
  const { isOpen, dropdownHeight, dropdownRef, contentRef, toggle } =
    useDropdownToggle();

  const state = isOpen ? "open" : "close";

  return (
    <div ref={dropdownRef} className="profile-root">
      <div className="profile" tabIndex={0} onClick={toggle}>
        <div className="avatar">
          <Avatar
            skeleton={skeleton}
            size="md"
            src={avatar_src}
            letter={letter}
          />
        </div>

        {skeleton ? (
          <Skeleton height="24" width="70" />
        ) : (
          <h1 className="name">{name}</h1>
        )}

        <div className={`icon ${state}`}>
          <Icon size="sm" icon="keyboard_arrow_down" />
        </div>
      </div>

      <div
        className={`dropdown ${state}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${dropdownHeight}px` : "0" }}
      >
        {children}
      </div>
    </div>
  );
};
