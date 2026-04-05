import type { ImgHTMLAttributes } from "react";
/**
 * Available sizes for the Brand component.
 * Mapped to height values: sm=24px, md=32px, lg=40px.
 * Width scales automatically to preserve the image's aspect ratio.
 */
export type BrandSize = "sm" | "md" | "lg";
export interface BrandProps extends ImgHTMLAttributes<HTMLImageElement> {
    /**
     * Path or URL to the brand image (logo).
     * Supports raster formats (PNG, JPG, WebP) and vector (SVG).
     * For best results across all sizes, prefer SVG.
     */
    src: string;
    /**
     * Accessible text description of the image.
     *
     * - Provide a meaningful value when the logo conveys identity
     *   (e.g. `alt="Acme Corp logo"`).
     * - Pass an empty string (`alt=""`) when the logo is purely decorative
     *   and nearby text already identifies the brand.
     *
     * @default ""
     */
    alt?: string;
    /**
     * Controls the height of the brand container.
     * The image width scales automatically to preserve aspect ratio.
     *
     * - `sm`: 24px — use in dense layouts, footers, inline references
     * - `md`: 32px — standard use, navigation bars, cards
     * - `lg`: 40px — prominent placement, headers, landing pages
     */
    size: BrandSize;
}
