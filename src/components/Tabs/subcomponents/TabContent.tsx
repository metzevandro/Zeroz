import React from "react";

interface TabContentProps {
  content: React.ReactNode;
}

/**
 * Wrapper for the active tab's content panel.
 */
export function TabContent({ content }: TabContentProps) {
  return (
    <div className="tab-root">
      <div>{content}</div>
    </div>
  );
}
