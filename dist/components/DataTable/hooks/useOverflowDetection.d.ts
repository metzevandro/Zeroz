/**
 * Detecta se o elemento referenciado tem conteúdo
 * horizontalmente maior que sua largura visível.
 * Usa `ResizeObserver` para reavaliação automática ao redimensionar.
 */
export declare function useOverflowDetection(): {
    ref: import("react").RefObject<HTMLDivElement>;
    isOverflowed: boolean;
};
