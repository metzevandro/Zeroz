/**
 * Builds the `font-variation-settings` CSS value for a Material Symbol icon.
 *
 * Controls three variable font axes:
 * - `FILL`  — `1` for filled variant, `0` for outlined (default)
 * - `GRAD`  — grade, fixed at `0`
 * - `opsz`  — optical size, fixed at `24`
 *
 * @see https://fonts.google.com/knowledge/glossary/variable_fonts
 */
export declare function buildIconVariationSettings(fill: boolean): string;
