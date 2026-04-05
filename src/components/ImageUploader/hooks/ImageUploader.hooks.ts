import {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  DragEvent,
} from "react";
import { ImageUploaderProps } from "../ImageUploader.types";
import {
  mergeFileLists,
  readFileAsDataURL,
  removeFileAtIndex,
  toBytes,
} from "../utils/ImageUploader.utils";

interface UseImageUploaderOptions {
  value: ImageUploaderProps["value"];
  onChange: ImageUploaderProps["onChange"];
  maxFileSize: ImageUploaderProps["maxFileSize"];
  multiple: ImageUploaderProps["multiple"];
}

interface UseImageUploaderReturn {
  selectedFiles: FileList | null;
  imagePreviews: string[];
  isLoading: boolean;
  errorMessage: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleButtonClick: () => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleRemoveFile: (index: number) => void;
  handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => Promise<void>;
}

/**
 * Encapsula toda a lógica de estado e manipulação de arquivos do ImageUploader.
 * Mantém sincronização com o valor externo (prop `value`) e gerencia
 * previews, loading, erros e operações de drag-and-drop.
 */
export function useImageUploader({
  value,
  onChange,
  maxFileSize,
  multiple,
}: UseImageUploaderOptions): UseImageUploaderReturn {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(
    value ?? null,
  );
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxFileSizeBytes =
    maxFileSize !== undefined ? toBytes(maxFileSize) : undefined;

  // Sincroniza estado interno com valor externo
  useEffect(() => {
    setSelectedFiles(value ?? null);
  }, [value]);

  // Gera previews sempre que a lista de arquivos muda
  useEffect(() => {
    if (!selectedFiles) {
      setImagePreviews([]);
      return;
    }

    Promise.all(Array.from(selectedFiles).map(readFileAsDataURL))
      .then(setImagePreviews)
      .catch((error) => {
        console.error("Error loading image previews:", error);
        setImagePreviews([]);
      });
  }, [selectedFiles]);

  const applyFiles = useCallback(
    (newFileList: FileList) => {
      setSelectedFiles(newFileList);
      onChange(newFileList);
    },
    [onChange],
  );

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const incoming = Array.from(event.target.files ?? []);
      if (!incoming.length) return;

      setIsLoading(true);
      setErrorMessage(null);

      try {
        const validFiles = incoming.filter((file) => {
          if (maxFileSizeBytes && file.size > maxFileSizeBytes) {
            setErrorMessage(
              `File ${file.name} exceeds the maximum file size limit.`,
            );
            return false;
          }
          return true;
        });

        applyFiles(mergeFileLists(selectedFiles, validFiles));
        event.target.value = "";
      } catch {
        setErrorMessage("Error handling files.");
      } finally {
        setIsLoading(false);
      }
    },
    [selectedFiles, maxFileSizeBytes, applyFiles],
  );

  const handleRemoveFile = useCallback(
    (index: number) => {
      applyFiles(removeFileAtIndex(selectedFiles, index));
    },
    [selectedFiles, applyFiles],
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    async (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const incoming = Array.from(event.dataTransfer.files);
      if (!incoming.length) return;

      setIsLoading(true);
      setErrorMessage(null);

      try {
        const filesToAdd = multiple ? incoming : [incoming[0]];
        applyFiles(mergeFileLists(selectedFiles, filesToAdd));
      } catch {
        setErrorMessage("Error handling dropped files.");
      } finally {
        setIsLoading(false);
      }
    },
    [selectedFiles, multiple, applyFiles],
  );

  return {
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
  };
}
