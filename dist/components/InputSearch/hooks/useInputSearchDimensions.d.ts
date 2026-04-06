export declare function useElementDimensions<T extends HTMLElement>(): {
    ref: import("react").RefObject<T>;
    dimensions: {
        width: number;
        height: number;
    };
};
