import React from "react";
import "./Layout.scss";
export interface LayoutProps {
    children: React.ReactNode;
    columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
}
declare const Layout: React.FC<LayoutProps>;
export default Layout;
