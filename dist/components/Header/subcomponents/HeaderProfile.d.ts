import React from "react";
import { HeaderProfileProps } from "../Header.types";
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
export declare const HeaderProfile: React.FC<HeaderProfileProps>;
