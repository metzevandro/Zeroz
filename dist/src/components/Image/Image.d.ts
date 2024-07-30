import "./Image.scss";
import React, { ImgHTMLAttributes } from "react";
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  skeleton?: boolean;
}
declare const Image: React.FC<ImageProps>;
export default Image;
