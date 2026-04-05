import { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * URL of the image to display.
   */
  src: string;

  /**
   * Accessible description of the image.
   * Required for non-decorative images — omit or pass an empty string `""`
   * only for purely decorative images (WCAG 2.1 SC 1.1.1).
   */
  alt?: string;

  /**
   * Rendered width of the image in pixels (or any valid CSS unit as a string).
   * Also used to size the `<Skeleton>` placeholder when `skeleton` is `true`.
   */
  width?: string;

  /**
   * Rendered height of the image in pixels (or any valid CSS unit as a string).
   * Also used to size the `<Skeleton>` placeholder when `skeleton` is `true`.
   */
  height?: string;

  /**
   * When `true`, renders a `<Skeleton>` placeholder instead of the image.
   * Use during loading states to prevent layout shift.
   * @default false
   */
  skeleton?: boolean;
}
