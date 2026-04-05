import "./Tabs.scss";
import React from "react";
import { TabsProps } from "./Tabs.types";
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
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
