import "./Link.scss";
import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  content,
  disabled,
  children,
  ...rest
}) => {
  return (
    <>
      <a className={`link ${disabled ? "disabled" : ""}`} {...rest}>
        {children}
      </a>
    </>
  );
};

export default Link;
