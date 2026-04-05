import { useState, useEffect, useRef, ChangeEvent } from "react";
import { UploadedFile, FileUploaderProps } from "../FileUploader.types";
import {
  toBytes,
  validateFileList,
  toFileList,
} from "../utils/fileUploader.utils";

type UseFileUploaderOptions = Pick<
  FileUploaderProps,
  "multiple" | "maxFileSize" | "onChange" | "value" | "accept"
>;

interface UseFileUploaderReturn {
  fileInputRef: React.RefObject<HTMLInputElement>;
  selectedFiles: UploadedFile[];
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTriggerInput: () => void;
  handleRemoveFile: (id: string) => void;
}

export function useFileUploader({
  multiple,
  maxFileSize,
  onChange,
  value,
}: UseFileUploaderOptions): UseFileUploaderReturn {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);

  const maxFileSizeBytes = toBytes(maxFileSize);
  const prevValueRef = useRef<FileList | null | undefined>(undefined);

  useEffect(() => {
    const isEmpty =
      value === null || (value !== undefined && value.length === 0);
    if (!isEmpty) {
      return;
    }
    if (value === prevValueRef.current) {
      return;
    }

    prevValueRef.current = value;
    setSelectedFiles([]);
  }, [value]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Convert to array BEFORE resetting the input — resetting clears event.target.files
    // in some browsers, making the FileList empty even if files were selected.
    const filesArray = Array.from(event.target.files ?? []);

    event.target.value = "";

    if (filesArray.length === 0) {
      return;
    }

    const validated = validateFileList(
      filesArray,
      maxFileSizeBytes,
      maxFileSize,
    );

    setSelectedFiles((prev) => {
      const newState = multiple ? [...prev, ...validated] : validated;
      onChange(toFileList(newState));
      return newState;
    });
  };

  const handleTriggerInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = (id: string) => {
    setSelectedFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id);
      onChange(toFileList(updated));
      return updated;
    });
  };

  return {
    fileInputRef,
    selectedFiles,
    handleFileChange,
    handleTriggerInput,
    handleRemoveFile,
  };
}
