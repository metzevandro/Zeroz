/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
export function extractSeriesKeys(dataRow: Record<string, unknown>): string[] {
  return Object.keys(dataRow).filter((key) => key !== "month");
}

/**
 * Resolve o `borderRadius` de uma barra com base na sua posição
 * na pilha (modo stacked) ou como barra isolada.
 */
export function resolveBarRadius(
  index: number,
  totalKeys: number,
  stacked: boolean,
): [number, number, number, number] {
  if (!stacked) return [4, 4, 4, 4];
  if (index === 0) return [0, 0, 4, 4];
  if (index === totalKeys - 1) return [4, 4, 0, 0];
  return [0, 0, 0, 0];
}

/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 * As chaves vazias (" " e "") simulam séries sem significado semântico.
 */
export function generateSkeletonRow(): Record<string, unknown> {
  return {
    month: "",
    "": Math.floor(Math.random() * 100),
    " ": Math.floor(Math.random() * 100),
  };
}
