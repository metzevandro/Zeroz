import Icon from "../Icon/Icon";
import "./Avatar.scss";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

type IconSize = "sm" | "md" | "lg";

interface AvatarProps {
  size: IconSize;
  src?: string;
  skeleton?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ size, src, skeleton }) => {
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

  return (
    <div className="avatar">
      {skeleton ? (
        <Skeleton height={`${sizeInPixels}`} width={`${sizeInPixels}`} />
      ) : (
        <>
          {src ? (
            <label className="avatar-image">
              <img className={size} src={src} alt="Avatar" />
            </label>
          ) : (
            <label className={`avatar-icon ${size}`}>
              <Icon size={size} icon="person" />
            </label>
          )}
        </>
      )}
    </div>
  );
};

export default Avatar;
