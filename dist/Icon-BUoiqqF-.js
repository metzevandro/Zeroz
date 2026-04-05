'use strict';

var jsxRuntime = require('react/jsx-runtime');

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
function buildIconVariationSettings(fill) {
    return `'FILL' ${fill ? 1 : 0}, 'GRAD' 0, 'opsz' 24`;
}

/**
 * `Icon` renders a single Material Symbol using the variable icon font.
 *
 * Size and fill style are controlled via props. The component uses
 * `font-variation-settings` to switch between outlined and filled variants
 * without loading a separate font file.
 *
 * @example
 * ```tsx
 * // Outlined icon (default)
 * <Icon icon="search" size="md" />
 *
 * // Filled icon
 * <Icon icon="star" size="lg" fill />
 *
 * // Small icon
 * <Icon icon="keyboard_arrow_down" size="sm" />
 * ```
 *
 * @see https://fonts.google.com/icons
 */
const Icon = ({ icon, size, fill = false }) => (jsxRuntime.jsx("span", { className: `material-symbols-outlined ${size}`, style: { fontVariationSettings: buildIconVariationSettings(fill) }, translate: "no", children: icon }));

exports.Icon = Icon;
