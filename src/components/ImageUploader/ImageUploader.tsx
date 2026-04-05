import React from "react";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import type { ImageUploaderProps } from "./ImageUploader.types";
import "./ImageUploader.scss";
import { useImageUploader } from "./hooks/ImageUploader.hooks";

/**
 * ## ImageUploader
 *
 * Componente para upload de imagens via clique ou drag-and-drop.
 * Suporta múltiplos arquivos, validação de tamanho, preview inline e remoção individual.
 *
 * ### Quando usar
 * - Upload de imagens em formulários (avatar, galeria, banner)
 * - Cenários onde o usuário precisa visualizar as imagens antes de enviar
 *
 * ### Quando não usar
 * - Upload de arquivos não-imagem → use um componente `FileUploader` genérico
 * - Upload direto para storage sem preview → considere uma solução mais simples
 *
 * @example
 * // Uso básico controlado
 * const [files, setFiles] = useState<FileList | null>(null);
 *
 * <ImageUploader
 *   proportion="16/9"
 *   labelDropzone="Clique ou arraste"
 *   iconDropzone="upload"
 *   value={files}
 *   onChange={setFiles}
 * />
 *
 * @example
 * // Múltiplos arquivos com limite de tamanho
 * <ImageUploader
 *   proportion="1/1"
 *   labelDropzone="Adicionar imagens"
 *   iconDropzone="add_photo_alternate"
 *   multiple
 *   maxFileSize={2}
 *   onChange={handleChange}
 * />
 */
const ImageUploader: React.FC<ImageUploaderProps> = ({
  proportion,
  description,
  title,
  disabled = false,
  multiple = false,
  maxFileSize,
  labelDropzone,
  iconDropzone,
  onChange,
  value,
}) => {
  const {
    selectedFiles,
    imagePreviews,
    isLoading,
    errorMessage,
    fileInputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveFile,
    handleDragOver,
    handleDrop,
  } = useImageUploader({ value, onChange, maxFileSize, multiple });

  const hasFiles = selectedFiles && selectedFiles.length > 0;
  const aspectRatio = `calc(${proportion})`;
  const showDropzone = multiple || !hasFiles;

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {title && <p className="image-uploader-title">{title}</p>}

      <div className="image-previews">
        {hasFiles &&
          !isLoading &&
          Array.from(selectedFiles).map((_, index) => (
            <div key={index} className="image-uploader-item">
              <div className="delete-button-container">
                <div className="delete-button">
                  <ButtonIcon
                    size="sm"
                    appearance="default"
                    variant="secondary"
                    icon="delete"
                    onClick={() => handleRemoveFile(index)}
                    disabled={disabled}
                  />
                </div>
              </div>
              <img
                style={{ aspectRatio }}
                src={imagePreviews[index] ?? ""}
                alt="Preview"
                className="image-preview"
              />
            </div>
          ))}

        {showDropzone && (
          <div
            className={`image-uploader-content ${disabled ? "image-uploader-content-disabled" : ""}`}
            style={{ aspectRatio }}
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              disabled={disabled}
              multiple={multiple}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            {!isLoading && (
              <div className="uploader-item">
                <button
                  onClick={handleButtonClick}
                  style={{ aspectRatio }}
                  className={`image-uploader-dropzone ${disabled ? "image-uploader-dropzone-disabled" : ""}`}
                >
                  <Icon icon={iconDropzone} size="md" />
                  <p>{labelDropzone}</p>
                </button>
              </div>
            )}

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
      )}

      {description && (
        <p className="image-uploader-description">{description}</p>
      )}
    </div>
  );
};

ImageUploader.displayName = "ImageUploader";

export default ImageUploader;
