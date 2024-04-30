import Icon from "../Icon/Icon";
import "./Avatar.scss";
import React from "react";

type IconSize = "sm" | "md" | "lg";

interface AvatarProps {
  size: IconSize;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, src }) => {
  return (
    <>
      <div className="avatar">
        {src ? (
          <label className="avatar-image">
            <img className={size} src={src} />
          </label>
        ) : (
          <label className={`avatar-icon ${size}`}>
            <Icon size={size} icon="person" />
          </label>
        )}
      </div>
    </>
  );
};

export default Avatar;
