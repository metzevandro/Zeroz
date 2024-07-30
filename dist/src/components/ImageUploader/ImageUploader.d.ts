import React from "react";
import "./ImageUploader.scss";
interface ImageUploaderProps {
  proportion: "9/16" | "16/9" | "1/1";
  description?: string;
  title?: string;
  disabled?: boolean;
  multiple?: boolean;
  maxFileSize?: number;
  labelDropzone: string;
  iconDropzone: string;
  onChange: (files: FileList | null) => void;
  value?: FileList | null;
}
declare const ImageUploader: React.FC<ImageUploaderProps>;
export default ImageUploader;
