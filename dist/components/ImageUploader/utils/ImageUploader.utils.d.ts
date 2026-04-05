/**
 * Converte um arquivo para uma Data URL via FileReader.
 */
export declare function readFileAsDataURL(file: File): Promise<string>;
/**
 * Combina uma lista existente de Files com novos arquivos,
 * retornando um novo FileList via DataTransfer.
 */
export declare function mergeFileLists(existing: FileList | null, incoming: File[]): FileList;
/**
 * Remove um arquivo de uma FileList pelo índice,
 * retornando um novo FileList via DataTransfer.
 */
export declare function removeFileAtIndex(files: FileList | null, index: number): FileList;
/**
 * Converte bytes para megabytes.
 */
export declare function toBytes(mb: number): number;
