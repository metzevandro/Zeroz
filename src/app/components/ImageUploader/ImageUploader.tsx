import React, {
  useState,
  ChangeEvent,
  useRef,
  DragEvent,
  useEffect,
} from "react";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import "./ImageUploader.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface ImageUploaderProps {
  proportion: "9/16" | "16/9" | "1/1";
  description?: string;
  title?: string;
  disable?: boolean;
  multiple?: boolean;
  maxFileSize?: number;
  labelDropzone: string;
  iconDropzone: string;
  onChange: (files: FileList | null) => void;
  value?: FileList | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  proportion,
  maxFileSize,
  description,
  title,
  disable,
  multiple,
  labelDropzone,
  iconDropzone,
  onChange,
  value,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(
    value !== undefined ? value : null
  );
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxFileSizeBytes =
    maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileRemoved, setFileRemoved] = useState<boolean>(false);

  useEffect(() => {
    setSelectedFiles(value !== undefined ? value : null);
  }, [value]);

  useEffect(() => {
    if (!selectedFiles) {
      setImagePreviews([]);
      return;
    }

    const readerPromises: Promise<string>[] = [];
    Array.from(selectedFiles).forEach((file) => {
      readerPromises.push(
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (typeof reader.result === "string") {
              resolve(reader.result);
            } else {
              reject(new Error("Failed to convert file to data URL."));
            }
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
      );
    });

    Promise.all(readerPromises)
      .then((results) => {
        setImagePreviews(results);
      })
      .catch((error) => {
        console.error("Error loading image previews:", error);
        setImagePreviews([]);
      });
  }, [selectedFiles]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setIsLoading(true);
    setFileRemoved(false);

    if (files && files.length > 0) {
      const updatedFiles = selectedFiles ? Array.from(selectedFiles) : [];

      try {
        const promises = Array.from(files).map(async (file) => {
          if (file.size > (maxFileSizeBytes || Infinity)) {
            setErrorMessage(
              `File ${file.name} exceeds the maximum file size limit.`
            );
            return;
          }

          await handleFile(file);
          updatedFiles.push(file);
        });
        await Promise.all(promises);

        const newFileList = new DataTransfer();
        updatedFiles.forEach((file) => newFileList.items.add(file));

        setSelectedFiles(newFileList.files as FileList);
        onChange(newFileList.files as FileList);

        event.target.value = "";
      } catch (error) {
        setErrorMessage("Error handling files.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFile = async (file: File): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [
          ...prevPreviews,
          reader.result as string,
        ]);
        resolve();
      };
      reader.onerror = () => {
        reject(new Error("Failed to read the file."));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = Array.from(selectedFiles || []);
    updatedFiles.splice(index, 1);

    const dataTransfer = new DataTransfer();
    updatedFiles.forEach((file) => dataTransfer.items.add(file));

    const newFileList = dataTransfer.files;
    setSelectedFiles(newFileList);
    onChange(newFileList); // Chamando onChange aqui para notificar a remoção do arquivo

    setImagePreviews((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });

    setFileRemoved(true);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleCancel = () => {
    setSelectedFiles(null);
    setImagePreviews([]);
    setErrorMessage(null);
  };

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p className="image-uploader-title">{title}</p>
      <div className="image-previews">
        {selectedFiles && imagePreviews && !isLoading && (
          <>
            {Array.from(selectedFiles).map((file, index) => (
              <div key={index} className="image-uploader-item">
                <div className="delete-button-container">
                  <div className="delete-button">
                    <ButtonIcon
                      size="sm"
                      type="default"
                      variant="secondary"
                      typeIcon="delete"
                      onClick={() => handleRemoveFile(index)}
                      disable={disable}
                    />
                  </div>
                </div>
                <img
                  style={{
                    aspectRatio: `calc(${proportion})`,
                  }}
                  src={
                    imagePreviews && imagePreviews[index]
                      ? imagePreviews[index]
                      : ""
                  }
                  alt="Preview"
                  className="image-preview"
                />
              </div>
            ))}
          </>
        )}
        {(multiple || !selectedFiles || selectedFiles.length === 0) && (
          <div
            className={`image-uploader-content ${
              disable ? "image-uploader-content-disabled" : ""
            } ${
              (!multiple && fileRemoved) ||
              (multiple && (!selectedFiles || selectedFiles.length === 0))
                ? ""
                : "hidden"
            }`}
            style={{
              aspectRatio: `calc(${proportion})`,
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              disabled={disable}
              style={{ display: "none" }}
              multiple={!multiple}
            />
            <div className={`${isLoading ? "hidden" : "uploader-item"}`}>
              <button
                onClick={handleButtonClick}
                style={{ aspectRatio: `calc(${proportion})` }}
                className={`image-uploader-dropzone ${
                  disable ? "image-uploader-dropzone-disabled" : ""
                }`}
              >
                <Icon icon={iconDropzone} size="md" />
                <p>{labelDropzone}</p>
              </button>
            </div>
            {isLoading && (
              <div className="loading-screen">
                <Loading variant="default" />
              </div>
            )}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="image-uploader-error-message">{errorMessage}</p>
      ) }
      {description && (
        <p className="image-uploader-description">{description}</p>
      )}
    </div>
  );
};

export default ImageUploader;
