import "./Tabs.scss";
import React from "react";
import { TabsProps } from "./Tabs.types";
import { useTabs } from "./hooks/useTabs";
import { TabContent } from "./subcomponents/TabContent";

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
const Tabs: React.FC<TabsProps> = ({ tabs, widthFull = false }) => {
  const { activeTab, indicatorStyle, tabItemGroupRef, setActiveTab } = useTabs({
    count: tabs.length,
  });

  const tabButtonStyle = widthFull ? { width: `${100 / tabs.length}%` } : undefined;

  return (
    <div className="tab-root">
      <div className="tab-item-group" ref={tabItemGroupRef}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={tabButtonStyle}
            className={`tab-item ${index === activeTab ? "tab-item-active" : ""}`}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={index === activeTab}
          >
            {tab.label}
          </button>
        ))}

        <div
          className="tab-indicator"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>

      <div className="tab-content" role="tabpanel">
        {tabs[activeTab] && <TabContent content={tabs[activeTab].content} />}
      </div>
    </div>
  );
};

export default Tabs;