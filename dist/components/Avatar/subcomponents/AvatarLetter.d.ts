import React from "react";
import type { AvatarSize } from "../Avatar.types";
interface AvatarLetterProps {
    size: AvatarSize;
    letter: string;
}
/**
 * Avatar variant that displays initials generated from a name.
 * @internal — For exclusive use inside the Avatar component
 */
declare const AvatarLetter: React.FC<AvatarLetterProps>;
export default AvatarLetter;
