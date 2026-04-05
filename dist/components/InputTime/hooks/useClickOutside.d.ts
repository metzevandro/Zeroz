import { RefObject } from "react";
/**
 * Fires `callback` when a mousedown event occurs outside `ref`.
 */
export declare function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void): void;
