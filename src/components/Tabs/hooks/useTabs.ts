import { useState, useRef, useCallback, useLayoutEffect } from "react";

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
export function useTabs({ count }: UseTabsOptions): UseTabsReturn {
  const [activeTab, setActiveTabState] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const tabItemGroupRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback((index: number) => {
    const group = tabItemGroupRef.current;
    if (!group) return;

    const tabEl = group.children[index] as HTMLElement | undefined;
    if (!tabEl) return;

    const groupRect = group.getBoundingClientRect();
    const tabRect = tabEl.getBoundingClientRect();

    setIndicatorStyle({
      left: tabRect.left - groupRect.left + group.scrollLeft,
      width: tabRect.width,
    });
  }, []);

  const scrollToCenter = useCallback((index: number) => {
    const group = tabItemGroupRef.current;
    if (!group) return;

    const tabEl = group.children[index] as HTMLElement | undefined;
    if (!tabEl) return;

    const tabRect = tabEl.getBoundingClientRect();
    const groupRect = group.getBoundingClientRect();
    const centerScroll =
      tabRect.left - groupRect.left - (group.clientWidth - tabRect.width) / 2;

    group.scrollTo({ left: group.scrollLeft + centerScroll, behavior: "smooth" });
  }, []);

  const setActiveTab = useCallback(
    (index: number) => {
      setActiveTabState(index);
      updateIndicator(index);
      scrollToCenter(index);
    },
    [updateIndicator, scrollToCenter],
  );

  useLayoutEffect(() => {
    updateIndicator(activeTab);
  }, [count]);

  return { activeTab, indicatorStyle, tabItemGroupRef, setActiveTab };
}