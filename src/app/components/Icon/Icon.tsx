import "./Icon.scss";
import React from "react";

interface IconProps {
  size: "sm" | "md" | "lg";
  icon: string | undefined;
  fill?: boolean;
}

const Icon: React.FC<IconProps> = ({ size, fill, icon }) => {
  const sizeClass = size;
  const fillStyle = `'FILL' ${fill ? 1 : 0}`;

  return (
    <>
      <span
        style={{ fontVariationSettings: fillStyle }}
        className={`material-symbols-outlined ${sizeClass}`}
      >
        {icon}
      </span>
    </>
  );
};

export default Icon;
