import React from "react";

export function BrandMode(story, context) {
  document.documentElement.setAttribute("data-company", context.globals.brand);

  return (
    <div data-company={context.globals.brand}>
      <style>{`
        /* Sobrescreve qualquer cor rgb(2, 156, 253) para var(--s-color-content-highlight) */
        [style*="color: rgb(2, 156, 253)"] {
          color: var(--s-color-content-highlight) !important;
        }

        .css-1e3avu6 {
          color: var(--s-color-content-highlight) !important;
        }
         
      `}</style>
      {React.createElement(story)}
    </div>
  );
}

export const brand = {
  description: "Brand",
  defaultValue: "zeroz",
  toolbar: {
    title: "Brand",
    icon: "admin",
    items: [
      { title: "Zeroz", value: "zeroz" },
      { title: "Whitelabel", value: "whitelabel" },
    ],
    dynamicTitle: true,
  },
};
