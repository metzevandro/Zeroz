/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
export function extractSeriesKeys(dataRow: Record<string, unknown>): string[] {
  return Object.keys(dataRow).filter((key) => key !== "month");
}

/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 */
export function generateSkeletonRow(): Record<string, unknown> {
  return {
    month: "",
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
  };
}
