import "./Image.scss";
import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width }) => {
  return (
    <>
      <img className="image-root" width={width} src={src} alt={alt} />
    </>
  );
};

export default Image;
