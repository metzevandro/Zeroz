/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
export declare function extractSeriesKeys(dataRow: Record<string, unknown>): string[];
/**
 * Resolve o `borderRadius` de uma barra com base na sua posição
 * na pilha (modo stacked) ou como barra isolada.
 */
export declare function resolveBarRadius(index: number, totalKeys: number, stacked: boolean): [number, number, number, number];
/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 * As chaves vazias (" " e "") simulam séries sem significado semântico.
 */
export declare function generateSkeletonRow(): Record<string, unknown>;
