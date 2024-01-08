import React from "react";
import "./Brand.scss";

interface BrandProps {
  src: string;
  alt?: string;
  size: "sm" | "md" | "lg";
}

const Brand: React.FC<BrandProps> = ({ src, alt, size }) => (
  <img className={`brand-${size}`} src={src} alt={alt} />
);

export default Brand;
