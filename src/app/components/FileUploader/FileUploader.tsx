import React, { useState, ChangeEvent, useRef } from "react";
import "./FileUploader.scss";
import Loading from "../Loading/Loading";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

interface FileUploaderProps {
  title: string;
  description: string;
  multiple?: boolean;
  disable?: boolean;
  maxFileSize?: number;
}

interface UploadedFile {
  file: File;
  hasError: boolean;
  errorMessage: string | null;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  title,
  description,
  multiple,
  disable,
  maxFileSize,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const maxFileSizeBytes =
    maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const updatedFiles: UploadedFile[] = [];

      Array.from(files).forEach((file) => {
        const hasError =
          maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
        const errorMessage = hasError
          ? `O tamanho do arquivo "${file.name}" excede o limite de ${maxFileSize} MB.`
          : null;

        updatedFiles.push({
          file,
          hasError,
          errorMessage,
        });

        if (!hasError) {
          handleFile(file);
        }
      });
      if (multiple === false) {
        setSelectedFiles(updatedFiles);
      }
      if (multiple === true) {
        setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
      }
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setIsLoading(false);
    };
    reader.onerror = () => {
      setIsLoading(false);
      // Tratar erro aqui se necessário
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <>
      <div className="file-uploader">
        <div className="file-uploader-header">
          <h1>{title}</h1>
          <div className="file-uploader-button">
            <input
              disabled={disable}
              type="file"
              ref={fileInputRef}
              multiple={!!multiple}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              variant="primary"
              disable={disable}
              onClick={handleButtonClick}
              label="Add file"
              typeIcon="upload_file"
              size="md"
            />
          </div>
        </div>
        <div className="file-uploader-footer">
          <p>{description}</p>
          {selectedFiles.length > 0 && (
            <ul className="file-uploader-items">
              {selectedFiles.map((fileObj, index) => (
                <li
                  className={`file-uploader-item ${
                    fileObj.hasError ? "file-uploader-item-error" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`file-uploaded ${
                      fileObj.hasError ? "file-uploaded-error" : ""
                    }`}
                  >
                    <p>{fileObj.file.name}</p>
                    <p className="file-uploaded-icon">
                      {isLoading && <Loading variant="default" />}
                      <div className="file-uploader-icon-error">
                        {fileObj.hasError && (
                          <Icon icon="error_outline" size="sm" />
                        )}
                      </div>
                      <ButtonIcon
                        variant="primary"
                        type="plain"
                        onClick={() => handleRemoveFile(index)}
                        size="sm"
                        typeIcon="close"
                      />
                    </p>
                  </div>
                  {fileObj.hasError && fileObj.errorMessage && (
                    <p className="file-uploader-error">
                      {fileObj.errorMessage}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUploader;
