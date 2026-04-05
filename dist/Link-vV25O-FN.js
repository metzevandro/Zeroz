'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Link = ({ content, disabled, children, ...rest }) => {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("a", { className: `link ${disabled ? "disabled" : ""}`, ...rest, children: children }) }));
};

exports.Link = Link;
