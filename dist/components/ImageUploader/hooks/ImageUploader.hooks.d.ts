import { ChangeEvent, DragEvent } from "react";
import { ImageUploaderProps } from "../ImageUploader.types";
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
export declare function useImageUploader({ value, onChange, maxFileSize, multiple, }: UseImageUploaderOptions): UseImageUploaderReturn;
export {};
