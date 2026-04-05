import { UploadedFile } from "../FileUploader.types";

export function toBytes(mb: number | undefined): number | undefined {
  return mb !== undefined ? mb * 1024 * 1024 : undefined;
}

function generateId(file: File): string {
  return `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 9)}`;
}

export function validateFile(
  file: File,
  maxFileSizeBytes: number | undefined,
  maxFileSizeMb: number | undefined,
): UploadedFile {
  const hasError =
    maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;

  const result: UploadedFile = {
    id: generateId(file),
    file,
    hasError,
    errorMessage: hasError
      ? `File "${file.name}" exceeds the ${maxFileSizeMb} MB size limit.`
      : null,
  };

  return result;
}

export function toFileList(files: UploadedFile[]): FileList | null {
  const dt = new DataTransfer();
  files.forEach(({ file }) => dt.items.add(file));
  const result = dt.files.length > 0 ? dt.files : null;
  return result;
}

export function validateFileList(
  files: FileList | File[],
  maxFileSizeBytes: number | undefined,
  maxFileSizeMb: number | undefined,
): UploadedFile[] {
  const arr = Array.isArray(files) ? files : Array.from(files);
  return arr.map((file) => validateFile(file, maxFileSizeBytes, maxFileSizeMb));
}
