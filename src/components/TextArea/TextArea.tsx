import React, { forwardRef } from "react";

import type { TextAreaProps } from "./TextArea.types";

import "./TextArea.scss";
import { useTextArea } from "./hooks/useTextArea";
import { resolveTextAreaContainerClass } from "./utils/resolveTextAreaContainerClass";

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
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      placeholder,
      value = "",
      disabled = false,
      error = false,
      errorText = "",
      onChange,
      ...rest
    },
    forwardedRef,
  ) => {
    const {
      internalValue,
      textareaRef,
      handleChange,
      handleContainerClick,
      handleContainerKeyDown,
    } = useTextArea({ value, onChange });

    const resolvedRef =
      (forwardedRef as React.RefObject<HTMLTextAreaElement>) ?? textareaRef;

    const containerClass = resolveTextAreaContainerClass(disabled, error);
    const showError = error && !disabled;

    return (
      <div className="text-area-root">
        <label className="text-area-label">{label}</label>

        <div
          tabIndex={0}
          role="group"
          className={containerClass}
          onClick={handleContainerClick}
          onKeyDown={handleContainerKeyDown}
        >
          <textarea
            ref={resolvedRef}
            placeholder={placeholder}
            disabled={disabled}
            value={internalValue}
            onChange={handleChange}
            aria-invalid={showError}
            aria-describedby={showError ? "textarea-error" : undefined}
            {...rest}
          />
        </div>

        {showError && (
          <p id="textarea-error" className="description" role="alert">
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
