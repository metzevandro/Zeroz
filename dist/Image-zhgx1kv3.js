'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Skeleton = require('./Skeleton-CzoMYdQv.js');

/**
 * `Image` is a thin wrapper around the native `<img>` element that adds
 * a `skeleton` loading state matching the image dimensions.
 *
 * All standard `<img>` HTML attributes are forwarded to the underlying element
 * via the rest spread, so it can be used as a drop-in replacement.
 *
 * @example
 * ```tsx
 * // Standard usage
 * <Image src="/photo.jpg" alt="Profile photo" width="80" height="80" />
 *
 * // Loading state
 * <Image src="/photo.jpg" alt="Profile photo" width="80" height="80" skeleton />
 *
 * // With native img attributes
 * <Image src="/banner.jpg" alt="Banner" width="600" height="200" loading="lazy" />
 * ```
 */
const Image = ({ src, alt, width, height, skeleton = false, ...props }) => {
    if (skeleton) {
        return jsxRuntime.jsx(Skeleton.Skeleton, { width: `${width}`, height: `${height}` });
    }
    return (jsxRuntime.jsx("img", { className: "image-root", src: src, alt: alt, width: width, height: height, ...props }));
};

exports.Image = Image;
