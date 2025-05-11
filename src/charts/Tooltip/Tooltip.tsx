import React from "react";
import { TooltipProps } from "recharts";
import "./Tooltip.scss";

const CustomTooltip: React.FC<
  TooltipProps<number, string> & { othersData?: any[] }
> = ({ active, payload, label, formatter, othersData }) => {
  if (active && payload && payload.length) {
    return (
      <div className="TooltipContent">
        <small className="label">{`${label ? label : ""}`}</small>
        {payload.slice(0, 10).map((entry, index) => {
          if (entry.name === "Outros" && othersData && othersData.length) {
            return (
              <div key={`item-others-${index}`}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      borderRadius: "2px",
                      width: 10,
                      height: 10,
                      backgroundColor: entry.color || entry.payload.fill,
                    }}
                  />
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
                      Outros:
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
                <ul style={{ padding: 0, listStyle: "disc" }}>
                  {othersData.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        listStyle: "none",
                        font: "var(--s-typography-caption-regular)",
                        color: "var(--s-color-content-light)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div>{item.keyName}</div>
                      <div>{formatter ? formatter(item.quantity, item.keyName, item, idx, othersData) : item.quantity}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
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
          );
        })}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
