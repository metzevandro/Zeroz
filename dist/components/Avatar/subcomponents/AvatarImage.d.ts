import React from "react";
import type { AvatarSize } from "../Avatar.types";
interface AvatarImageProps {
    size: AvatarSize;
    src: string;
}
/**
 * Avatar variant that displays an image.
 * @internal — For exclusive use inside the Avatar component
 */
declare const AvatarImage: React.FC<AvatarImageProps>;
export default AvatarImage;
