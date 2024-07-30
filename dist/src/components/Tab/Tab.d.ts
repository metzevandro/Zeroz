import React from "react";
import "./Tab.scss";
interface TabProps {
  label?: string;
  content: React.ReactNode;
}
export interface TabsProps {
  tabs: TabProps[];
  widthFull?: boolean;
}
export declare const Tab: React.FC<TabProps>;
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
