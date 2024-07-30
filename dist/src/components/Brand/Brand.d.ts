import React, { ImgHTMLAttributes } from "react";
import "./Brand.scss";
interface BrandProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  size: "sm" | "md" | "lg";
}
declare const Brand: React.FC<BrandProps>;
export default Brand;
