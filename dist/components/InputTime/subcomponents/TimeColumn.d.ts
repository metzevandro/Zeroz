import { TimeColumnProps } from "../InputTime.types";
/**
 * A single infinite-scroll drum-roll column for the time picker.
 *
 * Renders `values` repeated many times and uses `useInfiniteScroll`
 * to implement snap-to-item behavior with seamless looping.
 * A fixed highlight overlay indicates the selected (center) item.
 */
export declare function TimeColumn({ values, selected, onSelect }: TimeColumnProps): import("react/jsx-runtime").JSX.Element;
