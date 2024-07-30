import React from "react";
import "./FileUploader.scss";
interface FileUploaderProps {
  title: string;
  description?: string;
  multiple?: boolean;
  disabled?: boolean | undefined;
  maxFileSize?: number;
  buttonLabel: string;
  typeIconButton: string;
  onChange: (files: FileList | null) => void;
  value?: FileList | null;
}
export interface UploadedFile {
  file: File;
  hasError: boolean;
  errorMessage: string | null;
}
declare const FileUploader: React.FC<FileUploaderProps>;
export default FileUploader;
