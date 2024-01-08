import React from "react";
import "./Layout.scss";

export interface LayoutProps {
  children: React.ReactNode;
  columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
}

const Layout: React.FC<LayoutProps> = ({ children, columns, ...rest }) => {
  const columnClassNames = {
    "1": "one-column",
    "2 - Symmetric": "two-column-symmetric",
    "2 - Asymmetric": "two-column-asymmetric",
    "3 - Symmetric": "three-column-symmetric",
  };

  const columnClassName = columnClassNames[columns];

  return (
    <div {...rest} className={`layout ${columnClassName}`}>
      {children}
    </div>
  );
};

export default Layout;
