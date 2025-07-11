import React from "react";
import { TooltipProps } from "recharts";
import "./Tooltip.scss";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
  formatter,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="TooltipContent">
        <small className="label">{`${label ? label : ""}`}</small>
        {payload.slice(0, 10).map((entry, index) => {
          let valueContent: React.ReactNode = entry.value;
          if (formatter) {
            const formatted = formatter(
              entry.value ?? 0,
              entry.name ?? "",
              entry,
              index,
              payload,
            );
            valueContent = Array.isArray(formatted)
              ? formatted.join(" ")
              : formatted;
          }
          return (
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
                    color: "var(--s-color-content-light)",
                  }}
                >
                  {`${entry.name ? entry.name : ""}: `}
                </small>
                <small style={{ color: "var(--s-color-content-default)" }}>
                  {valueContent}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
