import React, { useRef, useState } from "react";
import "./Tab.scss";

interface TabProps {
  label?: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabProps[];
  widthFull?: boolean;
}

export const Tab: React.FC<TabProps> = ({ content }) => {
  return (
    <div className="tab-root">
      <div>{content}</div>
    </div>
  );
};

export const Tabs: React.FC<TabsProps> = ({ tabs, widthFull }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabItemGroupRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (tabItemGroupRef.current) {
      const tabItemWidth =
        tabItemGroupRef.current.children[index].getBoundingClientRect().width;
      const scrollLeft = tabItemGroupRef.current.scrollLeft;
      const offsetLeft =
        tabItemGroupRef.current.children[index].getBoundingClientRect().left;
      const centerScroll =
        offsetLeft - (tabItemGroupRef.current.clientWidth - tabItemWidth) / 2;
      tabItemGroupRef.current.scrollTo({
        left: centerScroll + scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const customizeWidthFull = (widthFull: boolean = false) => {
    if (widthFull) {
      return {
        width: "100%",
      };
    }
  };

  return (
    <div className="tab-root">
      <div className="tab-item-group" ref={tabItemGroupRef}>
        {tabs.map((tab, index) => (
          <button
            style={customizeWidthFull(widthFull)}
            className={`tab-item ${index === activeTab && "tab-item-active"}`}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <Tab content={tabs[activeTab].content} />
      </div>
    </div>
  );
};
