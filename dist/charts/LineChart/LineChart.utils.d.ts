/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
export declare function extractSeriesKeys(dataRow: Record<string, unknown>): string[];
/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 */
export declare function generateSkeletonRow(): Record<string, unknown>;
