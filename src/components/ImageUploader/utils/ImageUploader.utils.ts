/**
 * Converte um arquivo para uma Data URL via FileReader.
 */
export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
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
  });
}

/**
 * Combina uma lista existente de Files com novos arquivos,
 * retornando um novo FileList via DataTransfer.
 */
export function mergeFileLists(
  existing: FileList | null,
  incoming: File[],
): FileList {
  const transfer = new DataTransfer();
  Array.from(existing ?? []).forEach((f) => transfer.items.add(f));
  incoming.forEach((f) => transfer.items.add(f));
  return transfer.files;
}

/**
 * Remove um arquivo de uma FileList pelo índice,
 * retornando um novo FileList via DataTransfer.
 */
export function removeFileAtIndex(
  files: FileList | null,
  index: number,
): FileList {
  const transfer = new DataTransfer();
  Array.from(files ?? [])
    .filter((_, i) => i !== index)
    .forEach((f) => transfer.items.add(f));
  return transfer.files;
}

/**
 * Converte bytes para megabytes.
 */
export function toBytes(mb: number): number {
  return mb * 1024 * 1024;
}
