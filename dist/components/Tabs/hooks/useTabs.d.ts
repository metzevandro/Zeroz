interface UseTabsOptions {
    count: number;
}
interface IndicatorStyle {
    left: number;
    width: number;
}
interface UseTabsReturn {
    activeTab: number;
    indicatorStyle: IndicatorStyle;
    tabItemGroupRef: React.RefObject<HTMLDivElement>;
    setActiveTab: (index: number) => void;
}
/**
 * Manages tab selection state and the sliding indicator animation.
 *
 * The indicator is an absolutely-positioned `<div>` whose `left` and `width`
 * are derived from the active tab button's `getBoundingClientRect()`.
 * CSS `transition` on those properties produces the sliding effect.
 *
 * Also handles auto-scrolling the tab strip to keep the active tab
 * centered when the strip overflows horizontally.
 */
export declare function useTabs({ count }: UseTabsOptions): UseTabsReturn;
export {};
