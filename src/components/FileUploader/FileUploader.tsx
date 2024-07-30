import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import "./FileUploader.scss";
import Loading from "../Loading/Loading";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

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

const FileUploader: React.FC<FileUploaderProps> = ({
  title,
  description,
  multiple,
  disabled,
  maxFileSize,
  buttonLabel,
  typeIconButton,
  onChange,
  value, // Alteração aqui: Recebe o valor de fora como propriedade
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const maxFileSizeBytes =
    maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;

  useEffect(() => {
    // Atualiza os arquivos selecionados quando o valor de fora muda
    if (value && value.length > 0) {
      const updatedFiles: UploadedFile[] = [];
      Array.from(value).forEach((file) => {
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
          // Se não houver erro, processa o arquivo
          handleFile(file);
        }
      });

      setSelectedFiles(updatedFiles);
    } else {
      setSelectedFiles([]); // Limpa a lista de arquivos se o valor for nulo ou vazio
    }
  }, [value, maxFileSizeBytes]);

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
          // Se não houver erro, processa o arquivo
          handleFile(file);
        }
      });

      // Limpar o valor do campo de entrada de arquivo
      event.target.value = "";

      if (multiple === false) {
        setSelectedFiles(updatedFiles);
      }
      if (multiple === true) {
        setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
      }

      // Crie um novo FileList usando DataTransfer
      const updatedFileList = new DataTransfer();
      updatedFiles.forEach((fileObj) => {
        updatedFileList.items.add(fileObj.file);
      });

      // Chama a função onChange com o novo FileList
      onChange(updatedFileList.files.length > 0 ? updatedFileList.files : null);
    }
  };

  const handleFile = (file: File) => {
    setIsLoading(true); // Corrigido aqui
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
    const removedFile = updatedFiles.splice(index, 1)[0];
    setSelectedFiles(updatedFiles);

    const updatedFileList = updatedFiles.map((fileObj) => fileObj.file);
    const updatedFileListAsFileList = new DataTransfer();
    updatedFileList.forEach((file) => {
      updatedFileListAsFileList.items.add(file);
    });

    onChange(
      updatedFileListAsFileList.files.length > 0
        ? updatedFileListAsFileList.files
        : null,
    );
  };

  const [tamanhoPai, setTamanhoPai] = useState<number | null>(null);

  useEffect(() => {
    const updateTamanhoPai = () => {
      const paiElement = document.querySelector(
        ".file-uploader",
      ) as HTMLElement | null;
      if (paiElement) {
        setTamanhoPai(paiElement.offsetWidth);
      }
    };

    updateTamanhoPai();

    window.addEventListener("resize", updateTamanhoPai);

    return () => {
      window.removeEventListener("resize", updateTamanhoPai);
    };
  }, []);

  const estiloFilha = tamanhoPai
    ? { maxWidth: `calc(${tamanhoPai}px - 60px)` }
    : {};

  return (
    <>
      <div className="file-uploader">
        <div className="file-uploader-header">
          <h1>{title}</h1>
          <div className="file-uploader-button">
            <input
              disabled={disabled}
              type="file"
              ref={fileInputRef}
              multiple={!!multiple}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              variant="primary"
              disabled={disabled}
              onClick={handleButtonClick}
              label={buttonLabel}
              typeIcon={typeIconButton}
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
                    <p style={estiloFilha}>{fileObj.file.name}</p>
                    <p className="file-uploaded-icon">
                      {isLoading && <Loading variant="default" />}
                      <div className="file-uploader-icon-error">
                        {fileObj.hasError && (
                          <Icon icon="error_outline" size="sm" />
                        )}
                      </div>
                      <ButtonIcon
                        variant="primary"
                        buttonType="plain"
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
