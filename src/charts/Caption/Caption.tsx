import React, { useState } from "react";
import { LegendProps } from "recharts";

export default function CustomCaption({
  payload = [],
  othersData,
}: LegendProps & { othersData?: any[] }) {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "var(--s-spacing-small)",
        marginTop: "var(--s-spacing-medium)",
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--s-spacing-nano)",
            position: "relative",
          }}
          onMouseEnter={() => {
            if (entry.value === "Outros") setShowOthers(true);
          }}
          onMouseLeave={() => setShowOthers(false)}
        >
          <div
            style={{
              backgroundColor: entry.color,
              width: 8,
              height: 8,
              borderRadius: "100%",
              marginRight: "var(--s-spacing-nano)",
            }}
          />
          <small
            style={{
              color: "var(--s-color-content-default)",
              textTransform: "capitalize",
            }}
          >
            {entry.value}
          </small>
          {entry.value === "Outros" && showOthers && othersData && (
            <div
              style={{
                position: "absolute",
                top: "120%",
                left: 0,
                background: "var(--s-color-fill-default)",
                border: "1px solid var(--s-color-border-light)",
                borderRadius: 4,
                padding: 8,
                zIndex: 10,
                minWidth: 120,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <strong style={{ fontSize: 12 }}>Outros:</strong>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {othersData.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: 12,
                      color: "var(--s-color-content-light)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div>{item.keyName}</div>
                    <div>{item.quantity}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
