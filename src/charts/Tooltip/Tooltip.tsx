import React from "react";
import { TooltipProps } from "recharts";
import "./Tooltip.scss";

const CustomTooltip: React.FC<TooltipProps<any, any>> = ({
  active,
  payload,
  label,
  formatter,
}) => {
  if (active && payload && payload.length) {
    if ((payload[0] as any).othersList) {
      const othersList = (payload[0] as any).othersList as Array<any>;
      return (
        <div className="TooltipContent">
          <small className="label">{`${label ? label : ""}`}</small>
          <div
            style={{
              fontWeight: 600,
              marginBottom: 4,
              color: "var(--s-color-content-default)",
            }}
          >
            {payload[0].name}
          </div>
          {othersList.slice(0, 10).map((item, idx) => (
            <div
              key={item.keyName}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              {item.fill && (
                <div
                  style={{
                    borderRadius: "2px",
                    width: 10,
                    height: 10,
                    backgroundColor: item.fill,
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "var(--s-spacing-nano)",
                  alignItems: "center",
                }}
              >
                <small
                  className="intro"
                  style={{
                    textTransform: "capitalize",
                    color: "var(--s-color-content-light)",
                  }}
                >
                  {`${item.keyName ? item.keyName : ""}: `}
                </small>
                <small style={{ color: "var(--s-color-content-default)" }}>
                  {formatter
                    ? formatter(
                        item.quantity,
                        item.keyName,
                        item,
                        idx,
                        othersList,
                      )
                    : item.quantity}
                </small>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="TooltipContent">
        <small className="label">{`${label ? label : ""}`}</small>
        {payload.slice(0, 10).map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            {(entry.color || entry.payload.fill) && (
              <div
                style={{
                  borderRadius: "2px",
                  width: 10,
                  height: 10,
                  backgroundColor: entry.color || entry.payload.fill,
                }}
              />
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "var(--s-spacing-nano)",
                alignItems: "center",
              }}
            >
              <small
                className="intro"
                style={{
                  textTransform: "capitalize",
                  color: "var(--s-color-content-light)",
                }}
              >
                {`${entry.name ? entry.name : ""}: `}
              </small>
              <small style={{ color: "var(--s-color-content-default)" }}>
                {formatter
                  ? formatter(
                      entry.value ?? 0,
                      entry.name ?? "",
                      entry,
                      index,
                      payload,
                    )
                  : entry.value}
              </small>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
