'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

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
function useTabs({ count }) {
    const [activeTab, setActiveTabState] = React.useState(0);
    const [indicatorStyle, setIndicatorStyle] = React.useState({
        left: 0,
        width: 0,
    });
    const tabItemGroupRef = React.useRef(null);
    const updateIndicator = React.useCallback((index) => {
        const group = tabItemGroupRef.current;
        if (!group)
            return;
        const tabEl = group.children[index];
        if (!tabEl)
            return;
        const groupRect = group.getBoundingClientRect();
        const tabRect = tabEl.getBoundingClientRect();
        setIndicatorStyle({
            left: tabRect.left - groupRect.left + group.scrollLeft,
            width: tabRect.width,
        });
    }, []);
    const scrollToCenter = React.useCallback((index) => {
        const group = tabItemGroupRef.current;
        if (!group)
            return;
        const tabEl = group.children[index];
        if (!tabEl)
            return;
        const tabRect = tabEl.getBoundingClientRect();
        const groupRect = group.getBoundingClientRect();
        const centerScroll = tabRect.left - groupRect.left - (group.clientWidth - tabRect.width) / 2;
        group.scrollTo({
            left: group.scrollLeft + centerScroll,
            behavior: "smooth",
        });
    }, []);
    const setActiveTab = React.useCallback((index) => {
        setActiveTabState(index);
        updateIndicator(index);
        scrollToCenter(index);
    }, [updateIndicator, scrollToCenter]);
    React.useLayoutEffect(() => {
        updateIndicator(activeTab);
    }, [count]);
    return { activeTab, indicatorStyle, tabItemGroupRef, setActiveTab };
}

/**
 * Wrapper for the active tab's content panel.
 */
function TabContent({ content }) {
    return (jsxRuntime.jsx("div", { className: "tab-root", children: jsxRuntime.jsx("div", { children: content }) }));
}

/**
 * `Tabs` renders a horizontal tab strip with animated sliding indicator
 * and a content panel for the active tab.
 *
 * The active tab indicator slides smoothly between tabs using CSS transitions
 * on an absolutely-positioned `<div>` whose `left` and `width` are derived
 * from the active button's bounding rect.
 *
 * When `widthFull` is `true`, each tab button stretches to fill an equal
 * share of the available width.
 *
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { label: "Overview", content: <Overview /> },
 *     { label: "Details",  content: <Details /> },
 *     { label: "History",  content: <History /> },
 *   ]}
 * />
 * ```
 */
const Tabs = ({ tabs, widthFull = false }) => {
    const { activeTab, indicatorStyle, tabItemGroupRef, setActiveTab } = useTabs({
        count: tabs.length,
    });
    const tabButtonStyle = widthFull
        ? { width: `${100 / tabs.length}%` }
        : undefined;
    return (jsxRuntime.jsxs("div", { className: "tab-root", children: [jsxRuntime.jsxs("div", { className: "tab-item-group", ref: tabItemGroupRef, children: [tabs.map((tab, index) => (jsxRuntime.jsx("button", { style: tabButtonStyle, className: `tab-item ${index === activeTab ? "tab-item-active" : ""}`, onClick: () => setActiveTab(index), role: "tab", "aria-selected": index === activeTab, children: tab.label }, index))), jsxRuntime.jsx("div", { className: "tab-indicator", style: {
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                        } })] }), jsxRuntime.jsx("div", { className: "tab-content", role: "tabpanel", children: tabs[activeTab] && jsxRuntime.jsx(TabContent, { content: tabs[activeTab].content }) })] }));
};

exports.Tabs = Tabs;
