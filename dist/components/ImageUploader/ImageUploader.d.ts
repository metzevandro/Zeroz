import React from "react";
import type { ImageUploaderProps } from "./ImageUploader.types";
import "./ImageUploader.scss";
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
declare const ImageUploader: React.FC<ImageUploaderProps>;
export default ImageUploader;
