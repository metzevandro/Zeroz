'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Skeleton = require('./Skeleton-CzoMYdQv.js');

const Link = ({ content, disabled, children, skeleton, ...rest }) => {
    const linkRef = React.useRef(null);
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
    React.useLayoutEffect(() => {
        if (linkRef.current) {
            const { offsetWidth, offsetHeight } = linkRef.current;
            setDimensions({
                width: offsetWidth,
                height: offsetHeight,
            });
        }
    }, [children, disabled, skeleton]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("a", { ref: linkRef, className: `link ${disabled ? "disabled" : ""}`, style: {
                    position: skeleton ? "fixed" : "static",
                    visibility: skeleton ? "hidden" : "visible",
                    left: skeleton ? "-9999px" : "auto",
                    ...(rest.style || {}),
                }, ...rest, children: children }), skeleton && (jsxRuntime.jsx(Skeleton.Skeleton, { width: `${dimensions.width}px`, height: `${dimensions.height}px` }))] }));
};

exports.Link = Link;
