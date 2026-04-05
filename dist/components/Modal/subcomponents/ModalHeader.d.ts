interface ModalHeaderProps {
    title: string;
    description: string;
    dismissible: boolean;
    onClose: () => void;
}
/**
 * Renders the modal header with title, description, and optional close button.
 */
export declare function ModalHeader({ title, description, dismissible, onClose, }: ModalHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
