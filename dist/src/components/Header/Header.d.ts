import "./Header.scss";
import React from "react";
interface HeaderProps {
    children: React.ReactNode;
    breadcrumb: React.ReactNode;
    onClick: () => void;
    skeleton?: boolean;
}
declare const Header: React.FC<HeaderProps>;
interface HeaderProfileProps {
    name: string;
    children: React.ReactNode;
    avatar_src?: string;
    skeleton?: boolean;
    letter?: string;
}
export declare const HeaderProfile: React.FC<HeaderProfileProps>;
export default Header;
