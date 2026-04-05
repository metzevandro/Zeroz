import React from "react";
import type { AvatarSize } from "../Avatar.types";
interface AvatarIconProps {
    size: AvatarSize;
}
/**
 * Default (fallback) Avatar variant that displays a person icon.
 * Rendered when neither `src` nor `letter` is provided.
 * @internal — For exclusive use inside the Avatar component
 */
declare const AvatarIcon: React.FC<AvatarIconProps>;
export default AvatarIcon;
