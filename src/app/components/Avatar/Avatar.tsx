import Icon from "../Icon/Icon";
import "./Avatar.scss";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

type IconSize = "sm" | "md" | "lg";

interface AvatarProps {
  size: IconSize;
  src?: string;
  skeleton?: boolean;
  letter?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, src, skeleton, letter }) => {
  const getSize = (size: IconSize) => {
    switch (size) {
      case "sm":
        return 24;
      case "md":
        return 40;
      case "lg":
        return 64;
      default:
        return 32;
    }
  };

  const sizeInPixels = getSize(size);

  const getLetter = (letter?: string) => {
    if (letter && letter.includes(" ")) {
      const [firstName, lastName] = letter.split(" ");
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    } else if (letter && letter.length > 1) {
      return letter.charAt(0);
    }
    return letter;
  };

  return (
    <div className="avatar">
      {skeleton ? (
        <Skeleton
          height={`${sizeInPixels}`}
          circle={true}
          width={`${sizeInPixels}`}
        />
      ) : (
        <>
          {src ? (
            <label className="avatar-image">
              <img className={size} src={src} alt="Avatar" />
            </label>
          ) : (
            <>
              {letter ? (
                <label className={`avatar-letter ${size}`}>
                  {getLetter(letter)?.toLocaleUpperCase()}
                </label>
              ) : (
                <label className={`avatar-icon ${size}`}>
                  <Icon size={size} icon="person" />
                </label>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Avatar;
