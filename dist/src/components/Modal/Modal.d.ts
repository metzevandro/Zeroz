import "./Modal.scss";
import React from "react";
export interface ModalProps {
    title: string;
    description: string;
    content?: React.ReactNode;
    dismissible?: boolean;
    hideModal: () => void;
    isOpen: boolean;
    footer?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
interface ContentModalProps {
    children: React.ReactNode;
}
export declare const ContentModal: React.FC<ContentModalProps>;
export declare const FooterModal: React.FC<ContentModalProps>;
export default Modal;
