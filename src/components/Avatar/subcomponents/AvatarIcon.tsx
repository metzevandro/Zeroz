import React from "react";
import Icon from "../../Icon/Icon";
import type { AvatarSize } from "../Avatar.types";

interface AvatarIconProps {
  size: AvatarSize;
}

/**
 * Default (fallback) Avatar variant that displays a person icon.
 * Rendered when neither `src` nor `letter` is provided.
 * @internal — For exclusive use inside the Avatar component
 */
const AvatarIcon: React.FC<AvatarIconProps> = ({ size }) => (
  <label className={`avatar-icon ${size}`}>
    <Icon size={size} icon="person" />
  </label>
);

AvatarIcon.displayName = "AvatarIcon";

export default AvatarIcon;
