export type ImageUploaderProportion = "9/16" | "16/9" | "1/1";

/**
 * Props do componente ImageUploader.
 */
export interface ImageUploaderProps {
  /** Proporção (aspect ratio) aplicada à dropzone e ao preview das imagens. */
  proportion: ImageUploaderProportion;

  /** Texto descritivo exibido abaixo do uploader. */
  description?: string;

  /** Título exibido acima do uploader. */
  title?: string;

  /** Desabilita toda interação com o componente. @default false */
  disabled?: boolean;

  /** Permite seleção de múltiplos arquivos. @default false */
  multiple?: boolean;

  /**
   * Tamanho máximo permitido por arquivo, em megabytes.
   * Arquivos que excedem esse limite exibem mensagem de erro.
   */
  maxFileSize?: number;

  /** Texto exibido dentro da dropzone. */
  labelDropzone: string;

  /** Nome do ícone exibido dentro da dropzone. */
  iconDropzone: string;

  /** Callback disparado sempre que a lista de arquivos é alterada. */
  onChange: (files: FileList | null) => void;

  /** Lista de arquivos controlada externamente. */
  value?: FileList | null;
}
