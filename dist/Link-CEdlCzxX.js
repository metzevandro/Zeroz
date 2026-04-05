import { jsx, Fragment } from 'react/jsx-runtime';

const Link = ({ content, disabled, children, ...rest }) => {
    return (jsx(Fragment, { children: jsx("a", { className: `link ${disabled ? "disabled" : ""}`, ...rest, children: children }) }));
};

export { Link as L };
