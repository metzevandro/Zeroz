import React from "react";
import { HeaderProfileProps } from "../Header.types";
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
export declare const HeaderProfile: React.FC<HeaderProfileProps>;
