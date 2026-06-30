import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef, useState, useLayoutEffect } from 'react';
import { S as Skeleton } from './Skeleton-CvObjom8.js';

const Link = ({ content, disabled, children, skeleton, ...rest }) => {
    const linkRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        if (linkRef.current) {
            const { offsetWidth, offsetHeight } = linkRef.current;
            setDimensions({
                width: offsetWidth,
                height: offsetHeight,
            });
        }
    }, [children, disabled, skeleton]);
    return (jsxs(Fragment, { children: [jsx("a", { ref: linkRef, className: `link ${disabled ? "disabled" : ""}`, style: {
                    position: skeleton ? "fixed" : "static",
                    visibility: skeleton ? "hidden" : "visible",
                    left: skeleton ? "-9999px" : "auto",
                    ...(rest.style || {}),
                }, ...rest, children: children }), skeleton && (jsx(Skeleton, { width: `${dimensions.width}px`, height: `${dimensions.height}px` }))] }));
};

export { Link as L };
