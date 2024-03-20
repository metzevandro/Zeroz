import React, { ImgHTMLAttributes } from "react";
import "./Brand.scss";

interface BrandProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  size: "sm" | "md" | "lg";
}

const Brand: React.FC<BrandProps> = ({ src, alt, size, ...rest }) => (
  <img className={`brand-${size}`} src={src} alt={alt} {...rest} />
);

export default Brand;
