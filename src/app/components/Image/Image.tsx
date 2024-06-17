import Skeleton from "../Skeleton/Skeleton";
import "./Image.scss";
import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  skeleton?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  skeleton,
  ...props
}) => {
  return (
    <>
      {skeleton ? (
        <Skeleton width={`${width}`} height={`${height}`} />
      ) : (
        <img
          className="image-root"
          width={width}
          height={height}
          src={src}
          alt={alt}
          {...props}
        />
      )}
    </>
  );
};

export default Image;
