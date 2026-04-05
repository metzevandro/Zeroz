import { TextAreaProps } from "../TextArea.types";
interface UseTextAreaOptions {
    value: TextAreaProps["value"];
    onChange: TextAreaProps["onChange"];
}
interface UseTextAreaReturn {
    internalValue: string;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    handleContainerClick: () => void;
    handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}
/**
 * Encapsula o estado interno e os handlers do TextArea.
 * Mantém sincronização com o valor externo (prop `value`)
 * e centraliza as interações de foco.
 */
export declare function useTextArea({ value, onChange, }: UseTextAreaOptions): UseTextAreaReturn;
export {};
