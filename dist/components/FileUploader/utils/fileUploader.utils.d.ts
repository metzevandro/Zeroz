import { UploadedFile } from "../FileUploader.types";
export declare function toBytes(mb: number | undefined): number | undefined;
export declare function validateFile(file: File, maxFileSizeBytes: number | undefined, maxFileSizeMb: number | undefined): UploadedFile;
export declare function toFileList(files: UploadedFile[]): FileList | null;
export declare function validateFileList(files: FileList | File[], maxFileSizeBytes: number | undefined, maxFileSizeMb: number | undefined): UploadedFile[];
