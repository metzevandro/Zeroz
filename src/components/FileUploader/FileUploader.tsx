import "./FileUploader.scss";
import React from "react";
import Button from "../Button/Button";
import { FileUploaderProps } from "./FileUploader.types";
import { useFileUploader } from "./hooks/useFileUploader";
import { useContainerWidth } from "./hooks/useContainerWidth";
import { FileUploaderItem } from "./subcomponents/FileUploaderItem";

const FileUploader: React.FC<FileUploaderProps> = ({
  title,
  description,
  multiple = false,
  disabled = false,
  maxFileSize,
  accept,
  buttonLabel,
  typeIconButton,
  onChange,
  value,
}) => {
  const {
    fileInputRef,
    selectedFiles,
    handleFileChange,
    handleTriggerInput,
    handleRemoveFile,
  } = useFileUploader({ multiple, maxFileSize, onChange, value, accept });

  const { containerRef, fileNameMaxWidth } = useContainerWidth();

  return (
    <div className="file-uploader" ref={containerRef}>
      <div className="file-uploader-header">
        <h1>{title}</h1>
        <div className="file-uploader-button">
          <input
            type="file"
            ref={fileInputRef}
            multiple={multiple}
            disabled={disabled}
            accept={accept}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            variant="primary"
            disabled={disabled}
            onClick={handleTriggerInput}
            icon={typeIconButton}
            size="md"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>

      <div className="file-uploader-footer">
        {description && <p>{description}</p>}

        {selectedFiles.length > 0 && (
          <ul className="file-uploader-items">
            {selectedFiles.map((fileObj) => (
              <FileUploaderItem
                key={fileObj.id}
                fileObj={fileObj}
                fileNameStyle={fileNameMaxWidth}
                onRemove={handleRemoveFile}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
