import React from "react";
import type { TextAreaProps } from "./TextArea.types";
import "./TextArea.scss";
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
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
