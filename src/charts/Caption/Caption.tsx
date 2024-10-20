import React from "react";
import { LegendProps } from "recharts";

export default function CustomCaption({ payload = [] }: LegendProps) {
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
          }}
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
        </div>
      ))}
    </div>
  );
}
