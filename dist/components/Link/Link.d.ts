import "./Link.scss";
import React from "react";
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    disabled?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
    children: React.ReactNode;
}
declare const Link: React.FC<LinkProps>;
export default Link;
