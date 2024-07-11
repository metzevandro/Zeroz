import React from "react";

export function BrandMode(story, context) {
  document.documentElement.setAttribute("data-company", context.globals.brand);

  return (
    <div data-company={context.globals.brand}>{React.createElement(story)}</div>
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
      { title: 'IECLB', value: 'IECLB'}
    ],
    dynamicTitle: true,
  },
};
