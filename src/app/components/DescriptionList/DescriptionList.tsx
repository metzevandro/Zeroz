import "./DescriptionList.scss";
import React from "react";

interface DescriptionItem {
  title: string;
  description?: string;
}

interface DescriptionListProps {
  items: DescriptionItem[];
  direction: "row" | "column";
}

const DescriptionList: React.FC<DescriptionListProps> = ({
  items,
  direction,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={`description-list-root ${direction}`}
            style={
              index < items.length - 1
                ? {
                    borderBottom:
                      "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                  }
                : undefined
            }
          >
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default DescriptionList;
