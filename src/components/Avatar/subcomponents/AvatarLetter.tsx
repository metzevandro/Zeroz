import React from "react";
import type { AvatarSize } from "../Avatar.types";
import { getAvatarInitials } from "../Avatar.utils";

interface AvatarLetterProps {
  size: AvatarSize;
  letter: string;
}

/**
 * Avatar variant that displays initials generated from a name.
 * @internal — For exclusive use inside the Avatar component
 */
const AvatarLetter: React.FC<AvatarLetterProps> = ({ size, letter }) => (
  <label className={`avatar-letter ${size}`}>{getAvatarInitials(letter)}</label>
);

AvatarLetter.displayName = "AvatarLetter";

export default AvatarLetter;
