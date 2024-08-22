import React from "react";
import "./Aside.scss";
interface AsideProps {
    isOpen: boolean;
    title: string;
    description?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    toggleAside: () => void;
}
declare const Aside: React.FC<AsideProps>;
export default Aside;
interface AsideContentProps {
    children: React.ReactNode;
}
export declare const AsideContent: React.FC<AsideContentProps>;
interface AsideFooterProps {
    children: React.ReactNode;
}
export declare const AsideFooter: React.FC<AsideFooterProps>;
