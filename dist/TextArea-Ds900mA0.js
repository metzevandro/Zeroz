import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback, forwardRef } from 'react';

/**
 * Encapsula o estado interno e os handlers do TextArea.
 * Mantém sincronização com o valor externo (prop `value`)
 * e centraliza as interações de foco.
 */
function useTextArea({ value = "", onChange, }) {
    const [internalValue, setInternalValue] = useState(value);
    const textareaRef = useRef(null);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    const handleChange = useCallback((event) => {
        setInternalValue(event.target.value);
        onChange?.(event);
    }, [onChange]);
    const handleContainerClick = useCallback(() => {
        textareaRef.current?.focus();
    }, []);
    const handleContainerKeyDown = useCallback((event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            textareaRef.current?.focus();
        }
    }, []);
    return {
        internalValue,
        textareaRef,
        handleChange,
        handleContainerClick,
        handleContainerKeyDown,
    };
}

/**
 * Gera a string de classes CSS para o container do textarea.
 * Centraliza a lógica de variação visual em um único lugar.
 */
function resolveTextAreaContainerClass(disabled, error) {
    const modifiers = [
        disabled && "disabled",
        error && !disabled && "error",
    ].filter(Boolean);
    return ["text-area", ...modifiers].join(" ");
}

/**
 * ## TextArea
 *
 * Campo de texto multilinha para entrada de conteúdo extenso.
 * Suporta estados de erro, desabilitado e sincronização com valor externo.
 *
 * ### Quando usar
 * - Coleta de textos longos: descrições, comentários, observações
 * - Formulários que requerem mais de uma linha de input
 *
 * ### Quando não usar
 * - Inputs de linha única → use `Input` ou `TextField`
 * - Conteúdo somente leitura → considere `ReadOnlyText`
 *
 * @example
 * // Uso básico
 * <TextArea label="Descrição" placeholder="Digite aqui..." />
 *
 * @example
 * // Com estado de erro
 * <TextArea
 *   label="Comentário"
 *   placeholder="Digite seu comentário"
 *   error
 *   errorText="Campo obrigatório"
 * />
 *
 * @example
 * // Controlado externamente
 * const [text, setText] = useState("");
 * <TextArea
 *   label="Notas"
 *   placeholder="Adicione notas..."
 *   value={text}
 *   onChange={(e) => setText(e.target.value)}
 * />
 */
const TextArea = forwardRef(({ label, placeholder, value = "", disabled = false, error = false, errorText = "", onChange, ...rest }, forwardedRef) => {
    const { internalValue, textareaRef, handleChange, handleContainerClick, handleContainerKeyDown, } = useTextArea({ value, onChange });
    const resolvedRef = forwardedRef ?? textareaRef;
    const containerClass = resolveTextAreaContainerClass(disabled, error);
    const showError = error && !disabled;
    return (jsxs("div", { className: "text-area-root", children: [jsx("label", { className: "text-area-label", children: label }), jsx("div", { tabIndex: 0, role: "group", className: containerClass, onClick: handleContainerClick, onKeyDown: handleContainerKeyDown, children: jsx("textarea", { ref: resolvedRef, placeholder: placeholder, disabled: disabled, value: internalValue, onChange: handleChange, "aria-invalid": showError, "aria-describedby": showError ? "textarea-error" : undefined, ...rest }) }), showError && (jsx("p", { id: "textarea-error", className: "description", role: "alert", children: errorText }))] }));
});
TextArea.displayName = "TextArea";

export { TextArea as T };
