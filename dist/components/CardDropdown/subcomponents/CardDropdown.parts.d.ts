import React from "react";
import { CardDropdownState } from "../Carddropdown.types";
interface CardDropdownHeaderProps {
    title: string;
    description?: string;
    state: CardDropdownState;
    onClick: () => void;
}
export declare function CardDropdownHeader({ title, description, state, onClick, }: CardDropdownHeaderProps): import("react/jsx-runtime").JSX.Element;
interface CardDropdownBodyProps {
    content?: React.ReactNode;
    footer?: React.ReactNode;
    state: CardDropdownState;
    height: number;
    contentRef: React.RefObject<HTMLDivElement>;
}
export declare function CardDropdownBody({ content, footer, state, height, contentRef, }: CardDropdownBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
