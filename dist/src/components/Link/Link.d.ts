import "./Link.scss";
import React from "react";
interface LinkProps {
    href?: string;
    content: string;
    disabled?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
}
declare const Link: React.FC<LinkProps>;
export default Link;
