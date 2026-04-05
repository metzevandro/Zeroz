import "./DescriptionList.scss";
import React from "react";
import { DescriptionListProps } from "./DescriptionList.types";
/**
 * `DescriptionList` renders a list of label/value pairs,
 * similar to an HTML `<dl>` (definition list).
 *
 * Items are separated by a hairline divider, except after the last one.
 * The layout of each row is controlled by the `direction` prop.
 *
 * @example
 * ```tsx
 * <DescriptionList
 *   direction="row"
 *   items={[
 *     { title: "Status", description: "Active" },
 *     { title: "Plan", description: "Pro" },
 *     { title: "Renewal", description: "08/15/2025" },
 *   ]}
 * />
 * ```
 */
declare const DescriptionList: React.FC<DescriptionListProps>;
export default DescriptionList;
