import { ChangeEvent } from "react";
import { UploadedFile, FileUploaderProps } from "../FileUploader.types";
type UseFileUploaderOptions = Pick<FileUploaderProps, "multiple" | "maxFileSize" | "onChange" | "value" | "accept">;
interface UseFileUploaderReturn {
    fileInputRef: React.RefObject<HTMLInputElement>;
    selectedFiles: UploadedFile[];
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTriggerInput: () => void;
    handleRemoveFile: (id: string) => void;
}
export declare function useFileUploader({ multiple, maxFileSize, onChange, value, }: UseFileUploaderOptions): UseFileUploaderReturn;
export {};
