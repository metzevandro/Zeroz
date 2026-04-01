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
const AvatarImage: React.FC<AvatarImageProps> = ({ size, src }) => (
  <label className="avatar-image">
    <img className={size} src={src} alt="Avatar" />
  </label>
);

AvatarImage.displayName = "AvatarImage";

export default AvatarImage;
