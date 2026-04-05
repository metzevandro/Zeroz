/**
 * Gera a string de classes CSS para o container do textarea.
 * Centraliza a lógica de variação visual em um único lugar.
 */
export function resolveTextAreaContainerClass(
  disabled: boolean,
  error: boolean,
): string {
  const modifiers = [
    disabled && "disabled",
    error && !disabled && "error",
  ].filter(Boolean);

  return ["text-area", ...modifiers].join(" ");
}
