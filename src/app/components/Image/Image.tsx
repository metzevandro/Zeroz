import "./Image.scss";
import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, ...props }) => {
  return (
    <img className="image-root" width={width} src={src} alt={alt} {...props} />
  );
};

export default Image;
