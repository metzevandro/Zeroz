import "./DescriptionList.scss";
import React from "react";
import { DescriptionListProps } from "./DescriptionList.types";
import { DescriptionListItem } from "./subcomponents/DescriptionListItem";

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
const DescriptionList: React.FC<DescriptionListProps> = ({
  items,
  direction,
}) => {
  const lastIndex = items.length - 1;

  return (
    <>
      {items.map((item, index) => (
        <DescriptionListItem
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
          direction={direction}
          hasDivider={index < lastIndex}
        />
      ))}
    </>
  );
};

export default DescriptionList;
