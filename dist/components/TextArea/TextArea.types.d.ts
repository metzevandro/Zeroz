import React from "react";
/**
 * Props do componente TextArea.
 * Extends os atributos nativos do <textarea> do HTML,
 * exceto os que são controlados internamente pelo componente.
 */
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "disabled" | "placeholder"> {
    /** Texto exibido acima do textarea, identificando o campo. */
    label: string;
    /** Texto exibido dentro do textarea quando vazio. */
    placeholder: string;
    /** Valor controlado externamente do textarea. @default "" */
    value?: string;
    /** Desabilita o campo, impedindo interação do usuário. @default false */
    disabled?: boolean;
    /** Indica estado de erro no campo. Exibe `errorText` quando `true`. @default false */
    error?: boolean;
    /** Mensagem de erro exibida abaixo do campo quando `error` é `true`. @default "" */
    errorText?: string;
    /** Callback disparado ao alterar o valor do textarea. */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
